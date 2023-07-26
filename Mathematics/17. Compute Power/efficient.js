function computePower(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
  
    if (exponent % 2 === 0) {
      const temp = computePower(base, exponent / 2);
      return temp * temp;
    } else {
      const temp = computePower(base, Math.floor(exponent / 2));
      return base * temp * temp;
    }
  }
  
  // Test the function
  const base = 2;
  const exponent = 3;
  const power = computePower(base, exponent);
  console.log(`${base}^${exponent} = ${power}`);


  /* 
  
   start by checking whether the exponent is even or odd:

If the exponent is even, we compute the power by recursively calculating the power of (base, exponent / 2) and then squaring that result.
If the exponent is odd, we compute the power by recursively calculating the power of (base, floor(exponent / 2)) and then multiply that result with the base.
  */
  