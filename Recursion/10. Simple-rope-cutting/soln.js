function ropeCutting(n, a,b,c){
    if(n == 0) return 0;

    if(n < 0) return -1;

    let maxAtThisPoint = Math.max(ropeCutting(n-a,a,b,c), ropeCutting(n-b,a,b,c), ropeCutting(n-c,a,b,c) );

    if(maxAtThisPoint == -1) return -1;
    
    return 1 + maxAtThisPoint;
    
  }
  
  console.log(ropeCutting(9,2,2,2));


  /* 
  so the idea is that we need to check at each step what cut can we make to make the smallest cut.
  in this situation we can use recursion and find at each step what is the minimum length to cut. 
  
  */