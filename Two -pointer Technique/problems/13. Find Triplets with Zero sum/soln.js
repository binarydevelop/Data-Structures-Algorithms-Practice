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
  
console.log(findTripletsThatSumToZero([1, 2, 3])); 

/* https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article */