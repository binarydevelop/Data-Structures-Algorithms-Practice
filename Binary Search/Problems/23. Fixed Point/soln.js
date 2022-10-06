function fixedPoint(arr){
    let start = 0 ;
    let end = arr.length -1; 
  
    while(start <= end){
      let mid = Math.floor(start + (end - start)/2);
      if(arr[mid] == mid){ 
          return mid;
      }
      if(arr[mid] < mid){ 
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1; 
  }
  
  let arr = [-1,1,3,4,7,9]
  console.log(fixedPoint(arr))

  /* https://leetcode.ca/all/1064.html */