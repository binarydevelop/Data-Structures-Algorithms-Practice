
//GFG
function findTripletsThatSumToZero(arr) {
  arr.sort((a, b) => {
    return a - b;
  }) // -3 -1 0 1 2
  let results = []
  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    let target = 0 - arr[i]
    while (start < end) {
      if (arr[start] + arr[end] == target) {
        results.push([arr[i], arr[start], arr[end]])
      }
      if (arr[start] + arr[end] < target) {
        start++;
      } else {
        end--;
      }
    }
  }
  return results
}


console.log(findTriplets([1, 2, 3])); 

// Leetcode
function threeSum(arr) {
  arr.sort((a, b) => {
  return a - b;
})
let results = [];
for(let i = 0; i < arr.length - 2 ; i++) {
    if(i > 0  && arr[i] == arr[i-1]) {
        continue
    }
    let targetSum = 0 - arr[i];
    let start = i + 1;
    let end = arr.length - 1;

    while(start < end){
      const sum = arr[start] + arr[end]
      if(sum > targetSum){ 
        end--;
      } else if(sum < targetSum){
        start++;
      } else {
        results.push([arr[i], arr[start], arr[end]])
        while(arr[start] === arr[start + 1] ) start++;
        while(arr[end] === arr[end - 1] ) end--;
          start++;
          end--;
      }
    }
}
return results;
};