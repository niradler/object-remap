# object-remap

```
npm i -S object-remap
```

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
    formater: data => `${data.length} items`
  }
];

const newObj = objectRemap(obj, fieldsMap);
console.log({ obj, newObj });
```