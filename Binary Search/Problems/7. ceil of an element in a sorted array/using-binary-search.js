function ceilOfElem(arr, key){
    let start = 0;
    let end = arr.length - 1;
    let result = 0;
    if(arr[arr.length -1 ] < key){
      return arr[arr.length -1 ]
    }
    if(arr[0] > key){
      return -1
    }
    while(start <= end){
      let mid = Math.floor(start + (end - start)/2)
      if(arr[mid] == key){
        result = arr[mid];
        return result
      }    
      if(arr[mid] < key){
        start = mid + 1;
      }
      else{
              end = mid - 1 ;
              result = arr[mid];
      }
  
    }
  return result;
  }
  
  let arr = [1,2,3,4,8,10,12,19];
  let key = 5;
  console.log(ceilOfElem(arr,key));