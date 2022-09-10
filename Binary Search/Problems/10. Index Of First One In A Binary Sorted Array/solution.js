function indexOfFirstOneInABinarySortedArray(arr, key){
    let start =0 ;
    let end = arr.length - 1;
    if(arr[end] == 0){
      return -1
    }
    while(start <= end){
      let mid = Math.floor(start + (end -start)/2);
      if(arr[mid] == key){
        end = mid-1;
      }
      if(arr[mid] < key){ console.log(1)
        start = mid + 1;
      }
      if(arr[mid] > key){ console.log(2)
        end = mid-1;
      }
    }
    return start ;
    }
    
    let arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
    console.log(indexOfFirstOneInABinarySortedArray(arr, 1));