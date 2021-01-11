//let a = [5, 3, 8, 2, 4, 1];
//return a.sort() 


//let str = "This is a sample";

//let result = str.toUpperCase().split(" ").reverse().join(" ");

//console.log(result);

let text = "Dear Mrs. Mary has set about tending to Mr. Murdock's boots by way of Mrs. Austin's recommendations based on the Mr. Clean protocol of Mrs. Dew's deviled Mr."

function regIt(txt) {
  let l = txt.split(" ");
  for (let i = 0; i < txt.length; i++) {
    if (/Mrs./.test(l[i])) {
      l[i] = "Misses"; 
    } else if (/Mr./.test(l[i])) {
      l[i] = "Mister";
    } else {
      continue;
    }
  }
  console.log(l.join(" "));
}

regIt(text);