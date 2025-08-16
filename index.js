const path = require('path');
const fs = require('fs');

const exportsObj = {};

fs.readdirSync(path.join(__dirname, 'servers')).forEach(file => {
  if (file.endsWith('.js')) {
    const mod = require(`./servers/${file}`);
    Object.assign(exportsObj, mod);
  }
});

module.exports = exportsObj;