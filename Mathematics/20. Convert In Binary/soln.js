function convertInBinary(n){
    let binary = [];
    while(n>0){
      if(n&1){ // same as n %2 != 0 , checks if last bit is set if yes then odd 
        binary.unshift(1);
      } else {
        binary.unshift(0);
      }
      n=Math.floor(n/2);
    }
    return binary.join('');
  }
  
  
  console.log(convertInBinary(19));