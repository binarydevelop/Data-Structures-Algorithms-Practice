function countOfAnElement(arr, key){
    let count = 0 ;
    for(let i = 0 ; i < arr.length; i++){
  
      if(arr[i] == key){ 
        count++;
      }
    }
    return count
  }
  
  let arr = [1, 1, 2, 2, 2, 2, 3];
  let key =3;
  console.log(countOfAnElement(arr,key));