function soln(nums){
    let start = 0;
    let end = 1;
    let maxProfit = 0
    while(end < nums.length){
        console.log(nums[start], nums[end])
        let profit = 0
        if(nums[end] > nums[start]){
            profit = nums[end] - nums[start]
            maxProfit = Math.max(profit,maxProfit)
        } else {
            start = end
        }
        end++;
    }
    return maxProfit
} 


let nums = [2,1,4]
let target = 0
console.log(soln(nums, target))