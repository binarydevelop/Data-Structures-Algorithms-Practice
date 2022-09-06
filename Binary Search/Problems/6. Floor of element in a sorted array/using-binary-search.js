function floorOfElem(arr, key){
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
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
      if(arr[mid] < key && arr[mid] > result){
              start = mid + 1;
              result = arr[mid];
      }
      if(arr[mid] > key){
        end = mid - 1;
      }
    }
  return result;
  }
  
  let arr = [1,2,3,8,10,12,19];
  let key = 50;
  console.log(floorOfElem(arr,key));