function subsets(str){
    let unique = new Set();
    function helper(index, curr = ''){
      unique.add(curr);
      if(index < str.length){
        helper(index+1, curr+str[index]);
        helper(index+1, curr);
      }
      
      return unique;
    }
    return helper(0);
  }
  
  console.log(subsets('aab'));