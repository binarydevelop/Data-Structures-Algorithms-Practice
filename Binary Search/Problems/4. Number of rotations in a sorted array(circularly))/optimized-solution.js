function numberOfRotations(arr){
    let start = 0;
    let end = arr.length - 1 ;

    if(arr.length == 1){
      return arr[0]
    }
    while(start < end){ 
      let mid  = Math.floor(start + (end - start)/2);
            // If the middle element is smaller than its previous element, then it is the minimum element
            if(mid > 0 && arr[mid] < arr[mid-1]) {
                return mid;
            }

            // If the middle is greater than its next element, then the next element is the minimum element
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


  
  