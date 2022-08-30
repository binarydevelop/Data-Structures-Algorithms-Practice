
function mergeTwoSortedArrays(arr1, arr2){
  let newArr = [];
  let newArrLength = (arr1.length -1 + arr2.length -1) ;
  let ptr1 = 0;
  let ptr2 = 0;
  for(let i = 0; i< newArrLength; i++){ console.log(i)
    if(arr1[ptr1] < arr2[ptr2]){ //1
      newArr.push(arr1[ptr1]);
      ptr1++;
    }
    if(arr2[ptr2] < arr1[ptr1]){ //2
      newArr.push(arr2[ptr2]);
      ptr2++;
    }
    if(arr1[ptr1] == arr2[ptr2] && ptr1 < arr1.length -1 && ptr2 < arr2.length-1){ //3
      newArr.push(arr1[ptr1]);
      newArr.push(arr2[ptr2]);
      ptr1++;
      ptr2++;
    }
    if((arr1[ptr1] == undefined || null) && arr2[ptr2]){ //4
      newArr.push(arr2[ptr2])
      ptr2++;
    }
    if((arr2[ptr2] == undefined || null) && arr1[ptr1]){ //5
      newArr.push(arr2[ptr1])
      ptr1++;
    }
  }
  return newArr
}
    let arr1 = [2,2,4,7,9 ]
    let arr2 = [1,3,5,11,13,13,18,32,87,102];
    console.log(mergeTwoSortedArrays(arr1,arr2));


/* 1 and 2 are simple comparisons between elements and increasing the pointer of the respective array whose element will be pushed.

3 is to check for equal elements in both arrays and checking if we are not comapring with ```undefined```.

4 & 5 is to check if any of the array reaches end then we just push the element and increment the ptr. */