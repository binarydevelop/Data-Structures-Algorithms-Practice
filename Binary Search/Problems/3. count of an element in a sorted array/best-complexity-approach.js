function countOfAnElement(arr, key){
    let start = 0;
    let end  = arr.length -1 ;
    let firstOccurence = -1;
    let lastOccurence = -1; 
    while(start <= end){
        let mid = Math.floor(start + (end - start ) / 2);
        if(arr[mid] == key){
            firstOccurence = mid;
            lastOccurence = mid;
            end = mid - 1;
        }
        if(arr[mid] > key){
            end = mid -1;
        }
        if(arr[mid] < key){
            start = mid+1
        }
    }

    start = 0;
    end  = arr.length -1 ;
    while(start <= end){
        let mid = Math.floor(start + (end - start ) / 2);
        if(arr[mid] == key){
            lastOccurence = mid;
            start = mid + 1;
        }
        if(arr[mid] > key){
            end = mid -1;
        }
        if(arr[mid] < key){
            start = mid+1
        }
    }
    return (lastOccurence - firstOccurence ) + 1
}

let arr = [1, 1, 2, 2, 2, 2, 3];
let key =3;
console.log(countOfAnElement(arr,key));