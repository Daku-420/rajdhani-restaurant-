const fs = require('fs');
const path = require('path');

function checkImports(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      checkImports(fullPath);
    } else if (f.endsWith('.js') || f.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const importMatches = [...content.matchAll(/from\s+['"](\.[^'"]+)['"]/g)];
      importMatches.forEach(match => {
        const importPath = match[1];
        let resolved = path.resolve(path.dirname(fullPath), importPath);
        if (!fs.existsSync(resolved)) {
          if (fs.existsSync(resolved + '.js')) resolved += '.js';
          else if (fs.existsSync(resolved + '.jsx')) resolved += '.jsx';
          else if (fs.existsSync(resolved + '/index.js')) resolved += '/index.js';
        }
        if (!fs.existsSync(resolved)) {
          console.error('❌ BROKEN IMPORT in ' + fullPath + ': ' + importPath);
        } else {
          const realName = path.basename(resolved);
          const dirFiles = fs.readdirSync(path.dirname(resolved));
          if (!dirFiles.includes(realName)) {
            console.error('⚠️ CASE MISMATCH in ' + fullPath + ': ' + importPath);
          }
        }
      });
    }
  });
}

checkImports('c:/Rajdhani restaurant/src');
console.log('✅ Import audit finished.');
