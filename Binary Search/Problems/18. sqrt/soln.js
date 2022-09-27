function sqrt(x){
    let start = 1; 
    let end = x;
    
    if(x <= 1){
      return x;
    }
    while(start <= end){
      let mid = Math.floor(start + (end -start)/2);
      if(mid * mid == x){
        return mid;
      }
      if(mid * mid < x){
        start = mid + 1 ;
      } else  if(mid * mid > x){
        end = mid - 1;
      }
    }
  return end 
  }
  console.log(sqrt(11));