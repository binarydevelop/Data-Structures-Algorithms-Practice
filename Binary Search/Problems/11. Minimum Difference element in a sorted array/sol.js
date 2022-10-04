function minimumDifferenceElementInAsortedArray(arr, key){
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
    console.log(minimumDifferenceElementInAsortedArray(arr, 5));


    /*    
           At the end of the while loop, 
           a[start] is the ceiling of target (Smallest number greater than target), and 
           a[end] is the floor of target (Largest number smaller than target).
           
           Return the element whose difference with target is smaller
          */