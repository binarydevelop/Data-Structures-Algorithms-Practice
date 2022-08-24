function iterativeBinarySearch(arr, start, end, key){
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] == key){
            return mid;
        }
        else if(arr[mid] < key){
            start = mid + 1;
        } else if(arr[mid] > key){
            end = mid -1;
        }
    }
    return false
}

let arr = [1, 3, 5, 7, 8, 9];
console.log(iterativeBinarySearch(arr, 0, arr.length-1, 5));