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
  