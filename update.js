const fs = require('fs');
const content = fs.readFileSync('server-compatible-control.js', 'utf8');
const updated = content.replace(/MaxBot-TUI/g, 'MaxBot-WebCP').replace(/maxbot-tui/g, 'maxbot-webcp').replace(/MaxBot TUI/g, 'MaxBot WebCP');
fs.writeFileSync('server-compatible-control.js', updated);
console.log('File updated successfully!');
