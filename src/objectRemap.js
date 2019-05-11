const getField = require("lodash.get");
const setField = require("lodash.set");

function objectRemap(obj = {}, fields = []) {
  return fields.reduce(
    (newObj, fieldObj) =>
      (newObj = setField(
        newObj,
        fieldObj.target,
        fieldObj.formater && typeof fieldObj.formater === "function"
          ? fieldObj.formater(getField(obj, fieldObj.origin))
          : getField(obj, fieldObj.origin)
      )),
    {}
  );
}

module.exports = objectRemap;
