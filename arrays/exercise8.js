let ar = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function accumulate(arr) {
  arr.reduce((accumulator, element) => {
  if (accumulator[element.length] % 2 !== 0) {
    return accumulator[element.length];
    }
  }, new Array());
}

accumulate(ar);