/* https://www.callicoder.com/binary-search-nearly-almost-sorted-array/ */


function searchNearlySortedArray(arr, key ){
    let start = 0;
    let end = arr.length - 1;
    
    if(arr.length == 1 && arr[0] == key){ 
        return [0,arr[0]]
    }
    
    while(start < end ){ 
      let mid = Math.floor(start + (end - start)/2);
  
      if(arr[mid] == key ) {
        return [mid, arr[mid]];
      }
      if(mid > 0 && arr[mid - 1] == key ) {
        return [mid - 1, arr[mid - 1]];
      }
      if(mid < arr.length - 1 && arr[mid+1] == key ) {
        return [mid + 1, arr[mid + 1]];
      }
      if(arr[mid] < key){
       start = mid + 2;
      }
      if(arr[mid] > key){
        end = mid - 2;
      }
    }
    return false
  }
  
  console.log(searchNearlySortedArray([10, 3, 40, 20, 50, 80, 70], 20));


  /* 
  The idea is to compare the key with middle 3 elements, if present then return the index.
   If not present, then compare the key with middle element to decide whether to go in left half or right half.
   Comparing with middle element is enough as all the elements after mid+2 must be greater than element mid and all elements before mid-2 must be smaller than mid element.
  */