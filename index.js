const pkg = require("./package.json");

const libFile = pkg.library["bundle-node"]
  ? pkg.library["dist-node"]
  : pkg.library.entry;
module.exports = require(`./lib/${libFile}`);
