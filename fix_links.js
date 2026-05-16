const fs = require('fs');
const path = require('path');

const linkDict = {
  'san-pham.html': 'product.html',
  'gioi-thieu.html': 'about.html',
  'lien-he.html': 'contact.html',
  'thanh-toan.html': 'checkout.html'
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.vscode' && file !== 'assets') {
        processDirectory(fullPath);
      }
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      if (file === 'fix_links.js' || file === 'refactor.js') continue;
      
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const oldLink of Object.keys(linkDict)) {
        const newLink = linkDict[oldLink];
        const regex = new RegExp(oldLink, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newLink);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed links in: ' + fullPath);
      }
    }
  }
}

console.log("Bắt đầu sửa link sai...");
processDirectory(__dirname);
console.log("Hoàn tất sửa link!");
