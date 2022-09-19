function iterativeBinarySearch(arr, key){
    let start = 0;
    let end = arr.length-1;
    
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
  
  let arr = [1,3,6,7,21,22,67];
  let key = 22
  
  console.log(iterativeBinarySearch(arr, key));