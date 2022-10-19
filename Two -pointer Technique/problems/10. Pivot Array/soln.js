
function pivotArray(arr, pivot){
    let resArr = [];
    let low = 0 ;
    let high = arr.length -1;
    let count = 0;
    let resptr = 0;
    while(low <= high){ 
      if(arr[low] < pivot){
        resArr[resptr] = arr[low];
        resptr++;
      }else if(arr[low] == pivot){ 
        count++;
      } 
        low++;
    }
  
    for(let i = 0; i < count; i++){
      resArr[resptr] = pivot;
      resptr++;
    }
    
    low = 0;
    high = arr.length-1;
    while(low<=high){
      if(arr[low] > pivot){
    resArr[resptr] = arr[low];
    resptr++;
      }
      low++;
    }
  
    return resArr
  }
  
  let arr=[-3,4,3,2]
  console.log(pivotArray(arr, 2));


  /* https://leetcode.com/problems/partition-array-according-to-given-pivot/ */