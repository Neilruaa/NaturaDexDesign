const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Background page
  content = content.replace(/bg-\[#f2f6f3\]/g, 'bg-solarpunk-page');
  
  // Tailwind Text Colors
  content = content.replace(/text-emerald-950/g, 'text-solarpunk-leather');
  content = content.replace(/text-emerald-900/g, 'text-solarpunk-leather');
  content = content.replace(/text-emerald-800/g, 'text-solarpunk-leather');
  content = content.replace(/text-emerald-700/g, 'text-solarpunk-leather');
  content = content.replace(/text-emerald-600/g, 'text-solarpunk-leather');
  // Tailwind BGs
  content = content.replace(/bg-emerald-300\/20/g, 'bg-solarpunk-leather/10');
  content = content.replace(/bg-amber-200\/20/g, 'bg-solarpunk-sky/15');

  // Hex codes
  content = content.replace(/#064e3b/g, '#97572B'); // Very dark emerald -> Marron cuir
  content = content.replace(/#059669/g, '#97572B'); // Emerald 600 -> Marron cuir
  content = content.replace(/#065f46/g, '#97572B'); // Emerald 800 -> Marron cuir
  
  content = content.replace(/#10b981/g, '#A8DCAB'); // Emerald 500 -> Vert clair
  content = content.replace(/#34d399/g, '#2E6F40'); // Emerald 400 -> Vert sombre
  
  content = content.replace(/rgba\(6, ?78, ?59/g, 'rgba(151,87,43'); // rgb for #064e3b -> rgb for #97572B
  content = content.replace(/rgba\(5, ?150, ?105/g, 'rgba(168,220,171'); // rgb for #059669 -> rgb for #A8DCAB
  content = content.replace(/rgba\(16, ?185, ?129/g, 'rgba(168,220,171'); // rgb for #10b981 -> rgb for #A8DCAB

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
