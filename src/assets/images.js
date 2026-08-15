// Vite dynamic asset importer for all dish photos in src/assets/images
const imageModules = import.meta.glob('./images/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

export function getDishAsset(filename) {
  if (!filename) return '';
  const cleanName = filename.replace(/^\/images\//, '').replace(/^images\//, '').replace(/^\.\/images\//, '');
  const key = `./images/${cleanName}`;
  if (imageModules[key]) {
    return imageModules[key];
  }
  return `/images/${cleanName}`;
}

export const DISH_IMAGE_MAP = Object.keys(imageModules).reduce((acc, key) => {
  const filename = key.replace('./images/', '');
  acc[filename] = imageModules[key];
  return acc;
}, {});

export default imageModules;
