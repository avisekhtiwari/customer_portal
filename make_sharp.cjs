const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

// Remove all rounded-* classes
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    // Match rounded-none, rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-full, rounded-[...]
    content = content.replace(/rounded-(?:none|sm|md|lg|xl|2xl|3xl|full|t-\w+|b-\w+|l-\w+|r-\w+|tl-\w+|tr-\w+|bl-\w+|br-\w+|\[.*?\])/g, '');
    
    // Also change "Ritika" text in Navbar and PortalPreview to "Ritika Financial Corporation"
    if (file.includes('Navbar.tsx')) {
        content = content.replace(/>Ritika</g, '>Ritika Financial Corporation<');
    }
    if (file.includes('PortalPreview.tsx')) {
        content = content.replace(/>Ritika</g, '>Ritika Financial Corporation<');
        // Let's also adjust the size of the text if it's too big, maybe text-2xl -> text-lg
        content = content.replace(/text-2xl font-black tracking-tighter text-white uppercase">Ritika Financial Corporation/g, 'text-lg font-black tracking-tighter text-white uppercase">Ritika Financial Corporation');
    }
    if (file.includes('Footer.tsx')) {
        content = content.replace(/>Ritika</g, '>Ritika Financial Corporation<');
        content = content.replace(/Ritika Finance/g, 'Ritika Financial Corporation');
    }

    if (content !== original) {
        // Clean up double spaces caused by removing classes
        content = content.replace(/ className=" /g, ' className="');
        content = content.replace(/  +/g, ' ');
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});

// Update index.html to include a sharp font (Oswald)
const htmlPath = './index.html';
let htmlContent = fs.readFileSync(htmlPath, 'utf8');
if (!htmlContent.includes('Oswald')) {
    htmlContent = htmlContent.replace(
        '</head>', 
        '  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet">\n  </head>'
    );
    fs.writeFileSync(htmlPath, htmlContent);
    console.log('Updated index.html');
}

// Update index.css to use Oswald
const cssPath = './src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/font-family: 'Inter', system-ui, sans-serif;/g, "font-family: 'Oswald', sans-serif; text-transform: uppercase;");
cssContent = cssContent.replace(/@layer base {/, `@layer base {
  * {
    border-radius: 0 !important;
  }`);
fs.writeFileSync(cssPath, cssContent);
console.log('Updated index.css');
