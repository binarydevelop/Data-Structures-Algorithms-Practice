
/* Find the maximum number of cuts that can be made by using a ,b,c of length n */
function findmaxcuts(n,a,b,c){
    if(n==0) return 0;
    if(n<0) return -1;
    let maxcuts = Math.max(
      findmaxcuts(n-a,a,b,c),
      findmaxcuts(n-b,a,b,c),
      findmaxcuts(n-c,a,b,c)
    );
    
    if(maxcuts == -1) return -1;
    
    return 1+ maxcuts;
    
  }
  console.log(findmaxcuts(9,2,2,2));