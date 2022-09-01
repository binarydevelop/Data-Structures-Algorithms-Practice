function firtAndLastOccurence(arr, key){
    let firstOccurence = -1;
    let lastOccurence= -1;
    for(let i = 0 ; i< arr.length; i++){
      if(arr[i] == key && firstOccurence < 0){
        firstOccurence = i;
        lastOccurence = i;
      } if(arr[i] == key && firstOccurence >= 0) {
        lastOccurence = i;
      }
    }
    return [firstOccurence, lastOccurence]
  }
  let arr = [2,4,10,10,10,18,20];
  let key = 10;
  console.log(firtAndLastOccurence(arr,key));
  
  