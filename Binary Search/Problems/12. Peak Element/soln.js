function solution(arr){
    let start = 0;
    let end = arr.length -1 ;
    
    if(arr[0] > arr[1]){
      return arr[0];
    }
    if(arr[end] > arr[end -1]){
      return arr[end];
    }
    while(start <= end){
      let mid = Math.floor(start + (end - start) /2);
  
      if(arr[mid] > arr[mid + 1] && arr[mid] > arr[mid -1]){
        return arr[mid]
      }
      if(arr[mid] < arr[mid + 1] ){
        start = mid + 1;
      }else {
        end = mid -1;
      }
    }
  }
  
  let arr =[1, 2, 3]
  console.log(solution(arr));