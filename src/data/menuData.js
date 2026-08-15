import { getDishAsset } from '../assets/images';

export const RESTAURANT_INFO = {
  name: "Rajdhani Restaurant",
  tagline: "Dehradun's Premier Multicuisine Destination",
  established: "2012",
  address: "Indira Nagar, ITBP Road, Seemadwar, Dehradun, Uttarakhand 248146",
  landmark: "Near Dainik Jagran Office",
  phones: ["+91 81263 08805", "+91 97602 42569"],
  whatsapp: "918126308805",
  avgCostForTwo: "₹600–₹650",
  hours: "11:00 AM to 11:00 PM (Open Daily)",
  openingHour: 11,
  closingHour: 23,
  rating: 4.8,
  totalReviews: "1,250+",
  cuisines: ["North Indian", "Punjabi", "Mughlai", "Chinese", "Rajasthani", "Marwadi", "Gujarati"]
};

export const CATEGORIES = [
  { id: 'all', name: 'All Menu Items (11)', icon: 'Utensils' },
  { id: 'rajdhani-specials', name: 'Rajdhani Signatures', icon: 'Crown' },
  { id: 'tandoori-breads', name: 'Tandoori Naans & Breads', icon: 'Wheat' },
  { id: 'chicken-mutton-main', name: 'Chicken & Mutton Curries', icon: 'Flame' },
  { id: 'paneer-specialties', name: 'Paneer Creations', icon: 'Sparkles' },
  { id: 'dal-veggies', name: 'Dal & Salads', icon: 'Grid' },
  { id: 'thalis', name: 'Royal Thalis & Combos', icon: 'Grid' }
];

export const SPECIAL_THALIS = [
  {
    id: 'thali-1',
    name: "Rajdhani Special Non-Veg Thali",
    tag: 'MOST POPULAR NON-VEG',
    description: 'Our crown jewel thali featuring Rajdhani Special Pahadi Mutton, Chicken Changezi, Dal Handi, 2 Butter Naan, Saffron Rice, Fresh Raita & Sweet Gulab Jamun.',
    price: 320,
    originalPrice: 380,
    rating: 4.9,
    reviews: 310,
    isVeg: false,
    image: getDishAsset('rajdhani special pahadi mutton.png'),
    itemsIncluded: ['Rajdhani Special Pahadi Mutton', 'Chicken Changezi Gravy', 'Dal Handi', '2x Butter Naan', 'Saffron Rice', 'Sweet Gulab Jamun']
  },
  {
    id: 'thali-2',
    name: "Rajdhani Royal Veg Thali",
    tag: 'SIGNATURE VEGETARIAN',
    description: 'Generous feast of Kadhai Paneer, Dal Handi, 2 Garlic Naan, Jeera Rice, Boondi Raita, Roasted Papad, Salad & Saffron Rasmalai.',
    price: 280,
    originalPrice: 330,
    rating: 4.8,
    reviews: 245,
    isVeg: true,
    image: getDishAsset('kadhai paneer.png'),
    itemsIncluded: ['Kadhai Paneer Special', 'Dal Handi', '2x Garlic Naan', 'Jeera Basmati Rice', 'Saffron Rasmalai']
  }
];

export const MENU_ITEMS = [
  {
    id: 'naan-1',
    name: 'Butter Naan',
    category: 'tandoori-breads',
    price: 45,
    rating: 4.9,
    reviews: 420,
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 0,
    description: 'Freshly baked tandoori naan brushed with rich melted butter.',
    image: getDishAsset('butter naan.png')
  },
  {
    id: 'naan-2',
    name: 'Garlic Naan',
    category: 'tandoori-breads',
    price: 70,
    rating: 4.9,
    reviews: 380,
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 0,
    description: 'Fluffy tandoori bread topped with minced garlic, fresh herbs, and pure butter.',
    image: getDishAsset('garlic naan.png')
  },
  {
    id: 'curry-1',
    name: 'Fish Curry Boneless',
    category: 'chicken-mutton-main',
    price: 240,
    portions: {
      qtr: 240,
      half: 380,
      full: 590
    },
    rating: 4.9,
    reviews: 310,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    description: 'Tender boneless fish pieces simmered in authentic spiced gravy (Available in Qtr, Half & Full).',
    image: getDishAsset('fish curry boneless.png')
  },
  {
    id: 'curry-2',
    name: 'Chicken Changezi',
    category: 'chicken-mutton-main',
    price: 220,
    portions: {
      qtr: 220,
      half: 370,
      full: 600
    },
    rating: 4.9,
    reviews: 490,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3,
    description: 'Mughlai style slow cooked chicken in rich creamy tomato and milk gravy (Available in Qtr, Half & Full).',
    image: getDishAsset('chicken changezi.png')
  },
  {
    id: 'curry-3',
    name: 'Rara Chicken',
    category: 'chicken-mutton-main',
    price: 270,
    portions: {
      qtr: 270,
      half: 430,
      full: 700
    },
    rating: 4.9,
    reviews: 340,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3,
    description: 'Rich Punjabi specialty chicken cooked in thick seasoned chicken keema gravy (Available in Qtr, Half & Full).',
    image: getDishAsset('rara chicken.png')
  },
  {
    id: 'curry-4',
    name: 'Butter Chicken',
    category: 'chicken-mutton-main',
    price: 240,
    portions: {
      qtr: 240,
      half: 390,
      full: 650
    },
    rating: 4.9,
    reviews: 580,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 1,
    description: 'Iconic tandoori chicken cooked in rich velvety butter & tomato cream gravy (Available in Qtr, Half & Full).',
    image: getDishAsset('butter chicken.png')
  },
  {
    id: 'curry-5',
    name: 'Chicken Kalimirch',
    category: 'chicken-mutton-main',
    price: 250,
    portions: {
      qtr: 250,
      half: 410,
      full: 680
    },
    rating: 4.8,
    reviews: 390,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3,
    description: 'Succulent chicken cooked in rich cashew gravy infused with coarse crushed black pepper.',
    image: getDishAsset('chicken kalimirch.png')
  },
  {
    id: 'dal-1',
    name: 'Dal Handi',
    category: 'dal-veggies',
    price: 210,
    rating: 4.8,
    reviews: 320,
    isVeg: true,
    isChefSpecial: false,
    spiceLevel: 1,
    description: 'Slow-cooked yellow & black lentils tempered in handi with ghee, cumin & fresh garlic.',
    image: getDishAsset('dal handi.png')
  },
  {
    id: 'curry-6',
    name: 'Kadhai Chicken',
    category: 'chicken-mutton-main',
    price: 230,
    portions: {
      qtr: 230,
      half: 380,
      full: 640
    },
    rating: 4.8,
    reviews: 420,
    isVeg: false,
    isChefSpecial: false,
    spiceLevel: 2,
    description: 'Juicy chicken tossed with bell peppers, onions & freshly pounded kadhai spices.',
    image: getDishAsset('kadhai chicken.png')
  },
  {
    id: 'paneer-1',
    name: 'Kadhai Paneer',
    category: 'paneer-specialties',
    price: 260,
    rating: 4.9,
    reviews: 510,
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2,
    description: 'Fresh cottage cheese cubes cooked with crunchy capsicum & onion in spicy tomato gravy.',
    image: getDishAsset('kadhai paneer.png')
  },
  {
    id: 'spec-1',
    name: 'Rajdhani Special Pahadi Mutton',
    category: 'rajdhani-specials',
    price: 340,
    portions: {
      qtr: 340,
      half: 550,
      full: 920
    },
    rating: 4.9,
    reviews: 640,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3,
    description: 'Our crown signature dish! Tender local mutton slow-cooked in traditional Garhwali Pahadi herb gravy.',
    image: getDishAsset('rajdhani special pahadi mutton.png')
  }
];

export const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Vikram Rawat',
    rating: 5,
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    comment: 'The Rajdhani Special Pahadi Mutton and Garlic Naan are authentic perfection! Hands down best food in Dehradun.',
    recommendedDish: 'Rajdhani Special Pahadi Mutton & Garlic Naan'
  },
  {
    id: 'rev-2',
    name: 'Pooja Sharma',
    rating: 5,
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    comment: 'Chicken Changezi (Qtr ₹220) and Kadhai Paneer are lip-smacking delicious. Super fast delivery!',
    recommendedDish: 'Chicken Changezi & Kadhai Paneer'
  }
];
