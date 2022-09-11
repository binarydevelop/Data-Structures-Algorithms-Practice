function solution(arr){
    let start = 0;
    let end = arr.length -1 ;
    
    while(start <= end){
      let mid = Math.floor(start + (end - start)/2);
      
      if(arr[mid -1] < arr[mid] && arr[mid + 1] < arr[mid]){
        return arr[mid]
      }
      if(arr[mid -1] > arr[mid]){
        end = mid - 1
      } else {
        start = mid + 1;
      }
    }
    return false
  }
  
  let arr =[1,15,25,45,42,21,17,12,11];
  console.log(solution(arr));

  /* https://practice.geeksforgeeks.org/problems/maximum-value-in-a-bitonic-array3001/1 */