function uniqueSubsets(arr){
    let uniqueSet = new Set();
    
      function helper(index, curr = ''){
        uniqueSet.add(curr);
        
        if(index < arr.length){
          helper(index+1, curr+ arr[index]);
          helper(index+1, curr);
        }
        return [...uniqueSet];
      }
      return helper(0);
  }
  
  console.log(uniqueSubsets([2,1,2]));