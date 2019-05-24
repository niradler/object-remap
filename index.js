const objectRemap = require("./dist/objectRemap");

if (typeof module !== "undefined" && module.exports) {
  module.exports = objectRemap;
} else {
  window.objectRemap = objectRemap;
}
