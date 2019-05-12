const getField = require("lodash.get");
const setField = require("lodash.set");

function objectRemap(obj = {}, fields = []) {
  return fields.reduce((newObj, fieldObj) => newObj = setField(newObj, fieldObj.target, fieldObj.formatter && typeof fieldObj.formatter === "function" ? fieldObj.formatter(getField(obj, fieldObj.origin)) : getField(obj, fieldObj.origin)), {});
}

module.exports = objectRemap;
