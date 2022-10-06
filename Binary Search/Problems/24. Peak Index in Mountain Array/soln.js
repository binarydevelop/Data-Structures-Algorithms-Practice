/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length -1 ;
    
      while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        
        if(arr[mid -1] < arr[mid] && arr[mid + 1] < arr[mid]){
          return mid
        }
        if(arr[mid -1] > arr[mid]){
          end = mid - 1
        } else {
          start = mid + 1;
        }
      }
  return -1
  };

  /* https://leetcode.com/problems/peak-index-in-a-mountain-array/ */