const getField = require("lodash.get");
const setField = require("lodash.set");

const getValue = (obj, fieldObj) => {
  let callback = false;
  let value = null;

  fieldObj.formater && typeof fieldObj.formater === "function" || fieldObj.formatter && typeof fieldObj.formatter === "function";

  if (fieldObj.formater && typeof fieldObj.formater === "function") {
    callback = fieldObj.formater;
    value = callback(getField(obj, fieldObj.origin));
  } else if (fieldObj.formatter && typeof fieldObj.formatter === "function") {
    callback = fieldObj.formatter;
    value = callback(getField(obj, fieldObj.origin));
  } else {
    value = getField(obj, fieldObj.origin);
  }

  return value;
};

function objectRemap(obj = {}, fields = []) {
  return fields.reduce((newObj, fieldObj) => newObj = setField(newObj, fieldObj.target, getValue(obj, fieldObj)), {});
}

module.exports = objectRemap;