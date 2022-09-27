/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    nums.sort((a, b) => a - b)
let low = 0;
let high = nums.length - 1;
while (low <= high) {
    let mid = low + high >> 1;
    if (mid >= nums[mid]) {
        low = mid + 1
    } else {
        high = mid - 1;
    }
}
return low;
};