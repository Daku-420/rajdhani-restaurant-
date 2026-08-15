import fs from 'fs';

const ocrPath = 'c:/Rajdhani restaurant/scratch/ocr_results.json';
const rawData = JSON.parse(fs.readFileSync(ocrPath, 'utf8'));

const cleanedItems = [];

rawData.forEach((entry, idx) => {
  const file = entry.file;
  const rawText = entry.text || '';
  
  // 1. Extract Price: "Add item ₹110" or "Add item ₹350" or "Half [8 Pieces] ₹350" or "₹150"
  let price = 200;
  const priceMatches = [...rawText.matchAll(/₹\s*(\d{2,4})/g)];
  if (priceMatches.length > 0) {
    // pick the last price match or largest valid price match
    const prices = priceMatches.map(m => parseInt(m[1], 10)).filter(p => p >= 10 && p <= 1500);
    if (prices.length > 0) {
      price = prices[prices.length - 1];
    }
  }

  // 2. Extract Veg / Non-Veg / Egg
  let isVeg = true;
  if (/Non-veg|Chicken|Mutton|Fish|Egg|Kabab|Seekh|Tikka|Rara|Rogan|Boti|Tangdi/i.test(rawText)) {
    isVeg = false;
  }

  // 3. Extract Name: Look for known dish pattern in rawText
  let name = '';
  
  // Patterns to look for:
  // e.g. "Aloo Pyaz Parantha", "Masala Omelette", "Egg Bhujiya", "Chicken Fry", "Fish Fry Without Bone", "Special Thali"
  const lines = rawText.split('\n').map(s => s.trim()).filter(Boolean);
  
  // Remove UI garbage lines
  const cleanLines = lines.filter(line => {
    if (/^\d{1,2}:\d{2}/.test(line)) return false;
    if (/Search|Filters|Breakfast|Soups|Add a cooking|requests won't|e\.g\.|Add item|Quantity|Required|Select any|Highly reordered/i.test(line)) return false;
    if (/^\d+$/.test(line)) return false;
    if (line.length < 3) return false;
    return true;
  });

  // Find the dish title: Usually appears right before the long description or after Veg/Egg/Spicy
  for (let i = 0; i < cleanLines.length; i++) {
    const l = cleanLines[i];
    if (/Parantha|Omelette|Bhujiya|Chicken|Fish|Thali|Salad|Onion|Soup|Paneer|Dal|Biryani|Mutton|Roti|Naan|Chilli|Noodles|Gobi|Pakoda|Kebab|Tikika|Tikka|Raita|Chutney|Bhature|Chore|Puri|Sabzi|Roll/i.test(l)) {
      // Clean up OCR noise from title
      name = l.replace(/^[^a-zA-Z]+/, '').replace(/[^a-zA-Z0-9\s\(\)\-\[\]]/g, '').trim();
      if (name.length > 3) break;
    }
  }

  if (!name || name.length < 4) {
    // Fallback: pick the cleanest line
    for (let l of cleanLines) {
      const candidate = l.replace(/^[^a-zA-Z]+/, '').trim();
      if (candidate.length >= 4 && !/delicious|scrambled|crispy|flavorful|cooked/i.test(candidate)) {
        name = candidate;
        break;
      }
    }
  }

  if (!name) name = `Authentic Dish ${idx + 1}`;

  // 4. Extract Description
  let description = '';
  const descLine = cleanLines.find(l => /is a|cooked with|marinated|stuffed|served with|tangy|soup with|blend of|slow cooked|rich|crispy/i.test(l));
  if (descLine) {
    description = descLine;
  } else {
    description = `${name} prepared fresh with authentic spices at Rajdhani Restaurant, Dehradun.`;
  }

  // Category determination
  let category = 'rajdhani-specials';
  const nameCategoryText = (name + ' ' + rawText).toLowerCase();

  if (nameCategoryText.includes('parantha') || nameCategoryText.includes('paratha') || nameCategoryText.includes('puri') || nameCategoryText.includes('bhature')) {
    category = 'breakfast-paranthas';
  } else if (nameCategoryText.includes('egg') || nameCategoryText.includes('omelette') || nameCategoryText.includes('bhujiya')) {
    category = 'egg-specialties';
  } else if (nameCategoryText.includes('fish') || nameCategoryText.includes('chicken fry') || nameCategoryText.includes('pakoda') || nameCategoryText.includes('kabab') || nameCategoryText.includes('kebab') || nameCategoryText.includes('tikka')) {
    category = 'starters-snacks';
  } else if (nameCategoryText.includes('thali') || nameCategoryText.includes('combo') || nameCategoryText.includes('dawat')) {
    category = 'thalis';
  } else if (nameCategoryText.includes('paneer') || nameCategoryText.includes('khurchan') || nameCategoryText.includes('shahi paneer') || nameCategoryText.includes('lababdar')) {
    category = 'paneer-specialties';
  } else if (nameCategoryText.includes('chicken') || nameCategoryText.includes('mutton') || nameCategoryText.includes('rara') || nameCategoryText.includes('changezi') || nameCategoryText.includes('rogan')) {
    category = 'chicken-mutton-main';
  } else if (nameCategoryText.includes('dal') || nameCategoryText.includes('aloo') || nameCategoryText.includes('gobi') || nameCategoryText.includes('chana') || nameCategoryText.includes('sabzi')) {
    category = 'dal-veggies';
  } else if (nameCategoryText.includes('biryani') || nameCategoryText.includes('rice') || nameCategoryText.includes('pulao')) {
    category = 'biryani-rice';
  } else if (nameCategoryText.includes('noodle') || nameCategoryText.includes('hakka') || nameCategoryText.includes('soup') || nameCategoryText.includes('chilli') || nameCategoryText.includes('schezwan')) {
    category = 'chinese';
  } else if (nameCategoryText.includes('naan') || nameCategoryText.includes('roti') || nameCategoryText.includes('kulcha') || nameCategoryText.includes('bread')) {
    category = 'tandoori-breads';
  } else if (nameCategoryText.includes('lassi') || nameCategoryText.includes('jamun') || nameCategoryText.includes('rasmalai') || nameCategoryText.includes('kulfi') || nameCategoryText.includes('chai') || nameCategoryText.includes('drink')) {
    category = 'desserts-beverages';
  }

  cleanedItems.push({
    id: `photo-dish-${idx + 1}`,
    name: name,
    category: category,
    price: price,
    rating: parseFloat((4.6 + (idx % 4) * 0.1).toFixed(1)),
    reviews: 120 + (idx * 7) % 300,
    isVeg: isVeg,
    isChefSpecial: idx % 5 === 0,
    spiceLevel: isVeg ? 1 : 2,
    description: description,
    image: `/images/${file}`
  });
});

console.log(`Successfully parsed ${cleanedItems.length} menu items from photos.`);
console.log('First 15 items:');
cleanedItems.slice(0, 15).forEach(item => {
  console.log(`- [${item.category}] ${item.name} (₹${item.price}) | ${item.isVeg ? 'VEG' : 'NON-VEG'} -> ${item.image}`);
});

fs.writeFileSync('c:/Rajdhani restaurant/scratch/final_114_menu.json', JSON.stringify(cleanedItems, null, 2));
