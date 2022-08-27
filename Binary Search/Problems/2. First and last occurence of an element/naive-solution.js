function firstAndLastOccurenceOfElement(arr, target){
    let start = 0 , end = arr.length-1
    while(start <= end){
        let mid = Math.floor((start + end)/2)
        if(arr[mid] > key){
            end = mid -1;
        }
        if(arr[mid] < key){
            start = mid + 1;
        }
        if(arr[mid] == key){
            end = mid
            return end
        } 
    }
    console.log(end)

}

let arr = [2,4,10,10,10,18,20];
let key = 10;
console.log(firstAndLastOccurenceOfElement(arr,key));