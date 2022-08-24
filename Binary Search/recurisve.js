function recursiveBinarySearch(arr, start, end, key ){
    let mid = Math.floor(( start + end ) / 2); 
    if(start > end){
        return - 1;
    }
    if(arr[mid] === key){
        return mid;
    }
    if(arr[mid] > key){
        end = mid - 1;
    }
    if(arr[mid] < key){
        start = mid + 1;
    }
    
    return recursiveBinarySearch(arr, start, end, key);
}
let arr = [1, 3, 5, 7, 8, 9];
console.log(recursiveBinarySearch(arr, 0 , arr.length-1, 1));
