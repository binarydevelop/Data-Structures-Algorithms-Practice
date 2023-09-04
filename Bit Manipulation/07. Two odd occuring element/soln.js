function twoOddOccuringElements(arr){
    let xor = 0;
    let res1 = 0;
    let res2 = 0;
    // find the xor of all elements of the Array
    for(let i =0; i<arr.length;i++){
      xor = xor ^ arr[i];
    }
    //find the rightmost significant bit
    let rightmost = xor & ~(xor-1);
    console.log(rightmost);
    //divide the arr into two groups one with rmb as set and other as not set 
    for(let i = 0; i<arr.length; i++){
      if((arr[i] & rightmost) != 0){
        res1 ^= arr[i];
      } else {
        res2 ^= arr[i];
      }
    }
    return [res1, res2].sort((a,b)=>b-a);
  }
  
  let arr = [2, 3, 3, 4, 4, 5];
  console.log(twoOddOccuringElements(arr))

  //watch gfg video