# Object Remap

Remap object fields to a new object structure.


## Setup

```
npm i -S object-remap
```

## Usage

```
const objectRemap = require("object-remap");

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 4,
    f: [1, 2, 3]
  }
};

//simple
const fields = ["a", "b", "c"];

let newObj = objectRemap(obj, fields);
console.log({ obj, newObj });
/*
{
  obj: { a: 1, b: 2, c: 3, d: { e: 4, f: [Array] } },
  newObj: { a: 1, b: 2, c: 3}
}
*/

//advance
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

newObj = objectRemap(obj, fieldsMap);
console.log({ obj, newObj });
/*
{ 
  obj: { a: 1, b: 2, c: 3, d: { e: 4, f: [Array] } },
  newObj: { a: 1, e: 4, f: '3 items' } 
}
*/
```