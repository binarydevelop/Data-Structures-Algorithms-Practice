function binaryExponentiation(a, b){
    if(b == 0){
      return 1;
    } 
    const temp = binaryExponentiation(a, Math.floor(b/2));
    let result = temp * temp ;
    if(b % 2 == 1) {
      result = result * a;
    }
    return result;
  }
  
  console.log(binaryExponentiation(3,4));