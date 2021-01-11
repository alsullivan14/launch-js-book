let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};


function copyMachine(obj, arr) {
  let result = {};
  if (arr) {
    arr.forEach( el => {
      result[el] = obj[el];
    });
    return result;
  } else {
    return Object.assign(result, obj);
  }
}

let copy1 = copyMachine(objToCopy, ['bar', 'qux']);
console.log(copy1);

let copy2 = copyMachine(objToCopy);
console.log(copy2);


