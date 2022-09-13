function getBitonicIndex(arr){
    let start = 0;
    let end = arr.length -1 ;
    
    while(start <= end){
      let mid = Math.floor(start + (end - start)/2);
      
      if(arr[mid -1] < arr[mid] && arr[mid + 1] < arr[mid]){
        return mid
      }
      if(arr[mid -1] > arr[mid]){
        end = mid - 1
      } else {
        start = mid + 1;
      }
    }
    return -1
  }
  
  
  function ascendingBinarySearch(arr, start, end, key){
  
    while(start <= end){ 
      let mid = Math.floor(start + (end - start)/2);
      if(arr[mid] == key){
        return mid;
      }
      if(arr[mid] > key){
        end = mid - 1; 
      } else {
        start = mid + 1; 
      }
    }
  }
  
  
  function descendingBinarySearch(arr, start, end, key){
  
    while(start <= end){
      let mid = Math.floor(start + (end - start)/2);
      if(arr[mid] == key){
        return mid;
      }
      if(arr[mid] > key){
        start = mid + 1; 
      } else {
        end = mid - 1; 
      }
    }
  }
  
  function driver(arr, key){
    let bitonicIndex = getBitonicIndex(arr);
    if(key > arr[bitonicIndex]){
      return -1
    } else if(key == arr[bitonicIndex]){
      return bitonicIndex
    }    else {
          let temp = ascendingBinarySearch(arr, 0, bitonicIndex-1, key) 
          if (temp != -1) { 
              return temp 
          }
          temp = descendingBinarySearch(arr, bitonicIndex+1, size-1, key)
          if(temp != -1){
              return temp
          }
      }
      return -1
  }
  
  let arr =[-3, 8, 9, 20, 17, 5, 1];
  console.log(driver(arr,-3));