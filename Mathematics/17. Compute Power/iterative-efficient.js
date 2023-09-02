function computePower(x,n){
    let res = 1;
    while(n>0){
        if(n%2!=0){
            res = res * x;
        }

        x= x*x;
        n=Math.floor(n/2);
    }
    return res;
}

console.log(computePower(2,3));


/* 
function binaryExponentiation(base, exponent) {
  if (exponent < 0) {
    return "Exponent should be a non-negative integer.";
  }

  let result = 1;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }
    base *= base;
    exponent = Math.floor(exponent / 2);
  }
  return result;
}

// Example usage:
const base = 2;
const exponent = 5;
const result = binaryExponentiation(base, exponent);
console.log(`${base}^${exponent} = ${result}`);


*/