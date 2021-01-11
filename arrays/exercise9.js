let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function three(l) {
  console.log(l.includes(3));
}

three(numbers1);

three(numbers2);

three(numbers3);

/*

OR...

numbers1.includes(3);  // => true
numbers2.includes(3);  // => false
numbers3.includes(3);  // => false

*/