const getField = require("lodash.get");
const setField = require("lodash.set");

const getValue = (obj, fieldObj) => {
  let callback = fieldObj.formater || fieldObj.formatter || fieldObj.callback;
  let value = null;

  if (typeof callback === "function") {
    value = callback(getField(obj, fieldObj.origin));
  } else {
    value = getField(obj, fieldObj.origin);
  }

  return value;
};

const quickRemap = (obj = {}, fields = []) =>
  fields.reduce(
    (newObj, field) => (newObj = setField(newObj, field, getField(obj, field))),
    {}
  );

const remap = (obj = {}, fields = []) =>
  fields.reduce(
    (newObj, fieldObj) =>
      (newObj = setField(newObj, fieldObj.target, getValue(obj, fieldObj))),
    {}
  );

function objectRemap(obj = {}, fields = []) {
  if (typeof fields[0] === "string") {
    return quickRemap(obj, fields);
  } else if (typeof fields[0] === "object") {
    return remap(obj, fields);
  } else {
    throw new Error("fields supports String or Object types!");
  }
}

module.exports = objectRemap;
