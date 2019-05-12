const objectRemap = require("./objectRemap");

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 4,
    f: [1, 2, 3]
  }
};

const fieldsMap = [
  {
    origin: "a",
    target: "a"
  },
  {
    origin: "d.e",
    target: "e"
  },
  {
    origin: "d.f",
    target: "f",
    formatter: data => `${data.length} items`
  }
];

const newObj = objectRemap(obj, fieldsMap);
console.log({ obj, newObj });

/*
{ 
  obj: { a: 1, b: 2, c: 3, d: { e: 4, f: [Array] } },
  newObj: { a: 1, e: 4, f: '3 items' } 
}
*/
