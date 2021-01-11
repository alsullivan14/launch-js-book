let obj = {
  b: 2,
  a: 1,
  c: 3,
};
obj['qux'] = 3;


let newObj = Object.keys(obj);

newObj.forEach(elem => console.log(elem.toUpperCase()));


console.log(obj);