/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  let start = 0;
  let end = nums.length - 1;

while(start <= end){
  let mid = Math.floor(start + (end - start)/2);
  if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]){
      return mid;
  }
  if(nums[mid - 1] > nums[mid]){
      end = mid - 1;
  } else {
      start = mid + 1; 
  }
}
return end;
};
  
  let arr =[1, 2, 3]
  console.log(findPeakElement(arr));



  /* https://leetcode.com/problems/find-peak-element/submissions/ */
  /* 
  Algorithm

We can view any given sequence in numsnums array as alternating ascending and descending sequences.
 By making use of this, and the fact that we can return any peak as the result, we can make use of Binary Search to find the required peak element.
In case of simple Binary Search, we work on a sorted sequence of numbers and try to find out
the required number by reducing the search space at every step. In this case, we use a modification of this 
simple Binary Search to our advantage. We start off by finding the middle element, midmid from 
the given numsnums array. If this element happens to be lying in a descending sequence of numbers. 
or a local falling slope(found by comparing nums[i]nums[i] to its right neighbour), it means that the
 peak will always lie towards the left of this element. Thus, we reduce the search space to the
  left of midmid(including itself) and perform the same process on left subarray.
If the middle element, midmid lies in an ascending sequence of numbers, 
or a rising slope(found by comparing nums[i]nums[i] to its right neighbour), 
it obviously implies that the peak lies towards the right of this element. 
Thus, we reduce the search space to the right of midmid and perform the same process on the right subarray.
In this way, we keep on reducing the search space till we eventually reach
 a state where only one element is remaining in the search space. This single element is the peak element.
  
  */