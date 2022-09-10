function positionOfElementInSortedInfiniteArray(arr, key){
    let start = 0 ;
    let end = 1;
    while(start <= end ){
      if(arr[end] < key){
        end *= 2;
      }
      let mid = Math.floor(start + (end - start)/2);
      if(arr[mid] == key){
        return mid
      }
      if(arr[mid] > key){
        end = mid - 1;
      }
      if(arr[mid] < key){
        start = mid + 1;
      }
    }
    return -1;
  }
  
  let arr = [1,3,5,8,12,13,17,19,28,39,103,123,140,2040];
  let key = 17;
  console.log(positionOfElementInSortedInfiniteArray(arr, key));