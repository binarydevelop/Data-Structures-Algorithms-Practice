function indexOfFirstOneInABinarySortedArray(arr, key){
    let start = 0 ;
    let end = arr.length - 1;
    
    while(start < end){
      let mid = Math.floor(start + (end - start)/2);
      if(arr[mid] == key){
        return arr[mid];
      }  
      if(arr[mid] < key){
        start = mid + 1;
      }
      if(arr[mid] > key){
        end = mid - 1;
      }
    }
    if(Math.abs(key - arr[start]) < Math.abs(key-arr[end])){
      return arr[start]
    } else {
      return arr[end]
    }
    }
    
    let arr = [2, 5, 10, 12, 15];
    console.log(indexOfFirstOneInABinarySortedArray(arr, 5));