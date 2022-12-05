function numberOfRotations(arr){
    let start = 0;
    let end = arr.length - 1 ;

    if(arr.length == 1){
      return arr[0]
    }
    while(start < end){ 
      let mid  = Math.floor(start + (end - start)/2);
            if(mid > 0 && arr[mid] < arr[mid-1]) {
                return mid;
            }

            if(mid < arr.length -1 && arr[mid] > arr[mid+1]) { 
                return mid+1;
            }

            if(arr[start] <= arr[mid]) { // left array is sorted. So the pivot (min element) is on the right side
                start = mid+1;
            } else { //right array is sorted. So the pivot (min element) is on the left side
                end = mid-1;
            }
    }
  return 0;
}

  
let arr1 = [2,1];
console.log(numberOfRotations(arr1))


/* https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/ */
  