function iterativePower(x,n){
    let result = 1; 
    
    while(n > 0 ){
      if(n%2 != 0){
        result = result * x;
      }
      x = x * x;
      n = Math.floor(n/2);
    }
    return result;
  }
  
  console.log(iterativePower(2,3));