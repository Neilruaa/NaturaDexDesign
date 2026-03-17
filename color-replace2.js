const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Background replacements for Cards
  // rgba(255,255,255,0.6) -> rgba(250,235,215,0.8) for better contrast
  content = content.replace(/rgba\(255, ?255, ?255, ?0\.6\)/g, 'rgba(250,235,215,0.8)');
  content = content.replace(/rgba\(255, ?255, ?255, ?0\.4\)/g, 'rgba(250,235,215,0.6)');
  content = content.replace(/rgba\(255, ?255, ?255, ?0\.7\)/g, 'rgba(250,235,215,0.9)');
  
  // Specific amber replacements for non-star items
  // bg-amber-200/20 was handled.
  
  if (original !== content) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${path.basename(filePath)}`);
  }
};

const walkSync = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const activePath = path.join(dir, file);
    if (fs.statSync(activePath).isDirectory()) {
      walkSync(activePath);
    } else if (activePath.endsWith('.tsx') || activePath.endsWith('.ts')) {
      replaceInFile(activePath);
    }
  });
};

walkSync(path.join(__dirname, 'app'));
walkSync(path.join(__dirname, 'src/components'));
