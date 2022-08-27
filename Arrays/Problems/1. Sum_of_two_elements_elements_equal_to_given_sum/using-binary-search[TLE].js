/*
Given an array Arr of N positive integers and another number X.
Determine whether or not there exist two elements in Arr whose sum is exactly X.
*/
function binarySearch(arr, key, start, end){
    while(start <= end){
        let mid = (start + (end -start)/2)
        if(arr[mid]== key){
            return mid;
        }
        if(arr[mid] > key){
            end = mid - 1;
        }
        if(arr[mid] < key){
            start = mid + 1;
        }
    }
    return -1;
}

function usingBinarySearch(arr, sum){
    arr.sort((a , b) => {
        return a - b;
    })
    let i = 0; 
    while(i <= arr.length -1){
        let key =0;
        if(sum < arr[i] ){
            key = x - arr[i]
            if(this.binarySearch(arr, key, i +1, arr.length-1)){
                return true
            }
        }
        i++;
    }
return false
}

console.log(usingBinarySearch([1, 4, 45, 6, 10, -8], 16));