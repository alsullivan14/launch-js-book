function checkRegex(list, reg) {
  let result = [];
  list.forEach(element => {
    if (reg.test(element)) {
      result.push(element);
    }
  })
  return result;
}

let l = ["tomcat", "symptom", "tom yum", " certain", "candy"];

let r = /tom/;

console.log(checkRegex(l, r));
