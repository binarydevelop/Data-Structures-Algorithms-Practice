/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(arr) {
    let map = new Map();

    for(let i =0; i< arr.length; i++){
    if(map.has(arr[i])){
      return arr[i]
    } else {
      map.set(arr[i], i);
    }       
    }
    return -1;
};