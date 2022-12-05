function binarySearch(arr, key, start, end){
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
    return -1
}

function usingBinarySearch(arr, key){
    let index = binarySearch(arr,key, 0, arr.length);
    if(index == -1){
        return 0;
    }
    let count = 1;
    let start = index - 1;
    let end = index + 1;
    while(start >= 0 && arr[start] == key){
        count++;
         start--;
    }
    while(end <= arr.length && arr[end] == key){
        count++;
         end++;
    }
    return count
}

let arr = [1, 1, 2, 2, 2, 2, 3];
let key =2;
console.log(usingBinarySearch(arr,key));

/* https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/ */