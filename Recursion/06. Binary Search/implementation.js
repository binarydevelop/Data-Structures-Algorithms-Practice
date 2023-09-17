function binarySearch(arr, key){
    function helper(start,end){
      if(start > end) return -1;
      
      let mid = Math.floor(start+ (end-start)/2);
      
      if(arr[mid] == key){
        return mid;
      }
      
      if(arr[mid] < key){
        start = mid+1;
        return helper(start,end);
      }else{
        end = mid -1;
        return helper(start,end);
      }
    }
    return helper(0,arr.length-1);
}


console.log(binarySearch([1,2,3,4,5,6,7], 5));
