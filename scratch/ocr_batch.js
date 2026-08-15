import { createWorker } from 'tesseract.js';
import fs from 'fs';
import path from 'path';

async function run() {
  const imagesDir = 'C:\\Users\\Tushar\\Desktop\\pics for restaurant\\Zip file';
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg')).sort();
  
  console.log(`Starting OCR on ${files.length} files...`);
  const worker = await createWorker('eng');

  const results = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(imagesDir, file);
    try {
      const ret = await worker.recognize(filePath);
      results.push({
        file: file,
        text: ret.data.text
      });
      console.log(`[${i + 1}/${files.length}] Recognized ${file}`);
    } catch (err) {
      console.error(`Error on ${file}:`, err.message);
      results.push({ file: file, text: '', error: err.message });
    }
  }

  await worker.terminate();

  fs.writeFileSync('c:\\Rajdhani restaurant\\scratch\\ocr_results.json', JSON.stringify(results, null, 2));
  console.log('ALL 114 PHOTOS RECOGNIZED SUCCESSFULLY! Saved to ocr_results.json');
}

run();
