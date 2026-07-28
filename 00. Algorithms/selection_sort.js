function soln(nums){
    for(let i = 0; i < nums.length; i++){
        let currentMin = nums[i]

        for(let j = i+1; j< nums.length; j++){
            if(nums[j] < currentMin){
                currentMin = nums[j]
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }

    return nums
}
let nums = [11,4,80,13]
let k = 5
console.log(soln(nums))


