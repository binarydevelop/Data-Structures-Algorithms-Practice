function isPowerOf2(n){
    let count = 0;
    while(n>0){
      if(n&1 !== 0){
        count++;
      }
      n = n>>1;
    }
    if(count > 1) {
      return false;
    }
    
    return true;
  }
  
  console.log(isPowerOf2(18));


  // Interestingly a number which is a power of 2 will have only one bit set 