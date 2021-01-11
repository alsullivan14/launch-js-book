let ar = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (arr) {
  let result = []
  let lengths = arr.map(el => el.length)
  lengths.filter(n => {
    if (n % 2 !== 0) {
      result.push(n);
    }
  })
  console.log(result);
}

oddLengths(ar);