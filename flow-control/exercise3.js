let n = 8;

function evenOrOdd(n) {
    if (Number.isInteger(n)) {
        if (n % 2 === 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    } else {
        console.log("ERroR!");
        return;
    }   
}

evenOrOdd(n);