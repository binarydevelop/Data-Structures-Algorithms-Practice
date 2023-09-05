function xorAll(arr){
    let newArr = [];
    let xor = 0;
    for(let i = 0; i<arr.length;i++){
      xor ^= arr[i];
    }
    
    for(let i = 0; i<arr.length; i++){
      newArr[i] = xor ^ arr[i];
    }
    
    return newArr;
  }
  let arr =[2, 1, 5, 9];
  console.log(xorAll(arr))