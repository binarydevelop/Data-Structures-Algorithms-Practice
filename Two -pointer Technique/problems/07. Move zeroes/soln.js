/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(arr) {
    let low =0;
    let high= low + 1;
    
    while(high <= arr.length-1){
        if(arr[low] == 0){
          if(high < arr.length -1 && arr[high] == 0){
            while(arr[high] == 0){ 
              high++;
            }
          } else {
          let temp = arr[low]
          arr[low] = arr[high];
          arr[high] = temp;
          low++; 
          }
        } else {
      if(arr[low] !== 0 ){
        low++;
        high++;
      }
      }
    }
  };

  /* https://leetcode.com/problems/move-zeroes/submissions/ */