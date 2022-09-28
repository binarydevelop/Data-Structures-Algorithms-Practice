/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @QuestionLink https://leetcode.com/problems/intersection-of-two-arrays/    [349]
 */

 function binarySearch(arr, key){
    let start = 0;
    let end = arr.length-1;
        arr.sort((a,b) => {
      return a -b 
    })
    while(start <= end){
      let mid = Math.floor(start + (end - start)/ 2);
      if(arr[mid] == key){ 
        return mid;
      }
      else if(arr[mid] >  key){ 
        end = mid - 1;
      } 
      else if(arr[mid] < key) { 
        start = mid + 1
      }
    }
    return -1
    }


var intersection = function(nums1, nums2) {
let result = new Set();

    for(let i =0;i< nums1.length; i++){
    let present = binarySearch(nums2, nums1[i] )    
    if(present >= 0){
        result.add(nums1[i])
    }
}
return Array.from(result)
};