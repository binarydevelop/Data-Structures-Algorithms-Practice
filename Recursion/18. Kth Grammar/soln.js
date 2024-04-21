function kthGrammar(n,k){
    if(n==1) return 0;
    
    let previousRowLength = 1 << (n-2);
    
    if(k < previousRowLength){
      return kthGrammar(n-1, k);
    } else {
      let ans = kthGrammar(n-1, k - previousRowLength);
      return ans == 1 ? 0 : 1;
    }
  }
  
  
  console.log(kthGrammar(2,1));