function computePower(x,n){
    let power = 1;
    while(n>0){
      power = power * x;
      n--;
    }
    return power;
  }
  
  console.log(computePower(5,0));