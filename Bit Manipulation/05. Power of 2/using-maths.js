function isPowerOf2(n){
    const power = Math.log2(n);
    return (power % 1) == 0 ? true : false; // if power is completely divisible by 1 then its a whole number
  }
  
  console.log(isPowerOf2(16));