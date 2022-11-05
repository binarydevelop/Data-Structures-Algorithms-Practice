function maxArea(arr){
    let start = 0;
    let end = arr.length - 1;
    let maxAmt = 0;
    while(start<end){
      let minHeight = Math.min(arr[start], arr[end])
      let currentArea = (end - start) * minHeight;
      
      if(currentArea > maxAmt){
        maxAmt = currentArea
      }
      if(arr[start] < arr[end]){
        start++;
      }else {
        end--;
      }
    }
    return maxAmt;
  }
  
  let arr = [1,1];
  console.log(maxArea(arr));
  
  /* https://leetcode.com/problems/container-with-most-water/ */