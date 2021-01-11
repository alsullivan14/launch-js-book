/*function NegZero (value) {
  if (Math.sign(value) === -0) {
    console.log(true);
  } else {
    console.log(false);
  }
}


let v = -0;

let t = 0;

NegZero(v);

NegZero(t);
*/

function isNegativeZero(value) {
  return 1 / value === -Infinity;
}