function firstAndLastOccurenceOfElement(arr, key){
    let startIndex = 0;
    let endIndex = arr.length -1;

    let firstOccurence = -1;
    let lastOccurence = -1;

    while(startIndex <= endIndex){
        let mid = Math.floor(startIndex + ((endIndex -startIndex)/2));

        if(arr[mid] == key){
            firstOccurence = mid;
            lastOccurence = mid;
            endIndex = mid - 1;
        }
        if(arr[mid] < key){
            startIndex = mid + 1;
        }
        if(arr[mid] > key){
            endIndex = mid - 1;
        }
    }

    startIndex = 0;
    endIndex = arr.length -1;

    while(startIndex <= endIndex){
        let mid = Math.floor(startIndex + ((endIndex -startIndex)/2));

        if(arr[mid] == key){
            lastOccurence = mid;
            startIndex = mid + 1;
        }
        if(arr[mid] < key){
            startIndex = mid + 1;
        }
        if(arr[mid] > key){
            endIndex = mid - 1;
        }
    }
return [firstOccurence, lastOccurence];
}

let arr = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let key = 5;
console.log(firstAndLastOccurenceOfElement(arr, key));

/* https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ */