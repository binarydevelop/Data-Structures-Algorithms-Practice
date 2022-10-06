function pairSum(arr, target){
    let ptr1 = 0;
    let ptr2 = arr.length - 1; 
    let results = [];
    while(ptr1 < ptr2){
            if(arr[ptr1] + arr[ptr2] == target){
                results.push( [ptr1, ptr2])
                ptr1++;
            }
            if(arr[ptr1] + arr[ptr2] < target){
                ptr1++;
            }else {
                ptr2--;
            }
    }
            return results
  }
  console.log(pairSum([1,2,3,4,5],9))