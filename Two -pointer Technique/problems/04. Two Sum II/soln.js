/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(arr, target) {
    let ptr1= 0;
    let ptr2 = arr.length - 1;
    
    while(ptr1 < ptr2){
      let sum = arr[ptr1] + arr[ptr2]
      if(sum == target){
        return [ptr1+1, ptr2+1];
      } else if(sum < target){
        ptr1++;
      }else if(sum > target ){ 
        ptr2--;
      }
    }
  };

  /* https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ */