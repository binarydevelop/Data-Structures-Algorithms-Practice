function DescendingSortedArray(arr, key, start, end){
    let mid = Math.floor((start + end) / 2); 

    if(arr[mid] === key){
        return mid;
    }
    if(arr[mid] > key) {
        start = mid + 1; 
        return DescendingSortedArray(arr, key, start, end)
    }
    if(arr[mid] < key) {
        end = mid -1;
        return DescendingSortedArray(arr,key, start, end);
    }
}
let arr = [20, 17, 15, 14, 13, 12, 10 , 9, 8, 4];
let key = 4;
console.log(DescendingSortedArray(arr, key, 0, arr.length - 1 ));