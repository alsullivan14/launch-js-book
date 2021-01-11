let list = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(l) {
  let result = [];
  l.filter(n => {
    if (Number.isInteger(n)) {
      result.push(n);
    }
  })
  console.log(result);
}



let numbers = findIntegers(list);
// => [1, 3, -4]
 