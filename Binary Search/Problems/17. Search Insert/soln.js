
 var searchInsert = function(nums, target) {
    let start = 0;
let end  = nums.length - 1;
while(start <= end){
  let mid = Math.floor(start + (end - start)/2);
  if(nums[mid] == target){
    return mid;
  }
  if(nums[mid] > target){
    end = mid - 1;
  }
  if(nums[mid] < target){
    start = mid + 1;
  }
}
return start ;
};

/* 
If the target value is not found in the array, the binary search algorithm will eventually terminate with start being the index of the first element that is greater than the target value. This index represents the correct position to insert the target value in the array while maintaining its sorted order.
*/