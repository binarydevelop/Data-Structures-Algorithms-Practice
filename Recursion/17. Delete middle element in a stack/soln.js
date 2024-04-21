function deleteMid(stack){

    let mid = Math.floor(stack.length/2) + 1;
    function helper(stack, index=0){
      if(index == mid-1){
        console.log(stack.shift());
        return stack;
      }
      
      let temp = stack.shift();
      let removedElement = helper(stack,index+1);
      return [temp, ...removedElement]
    }
    
    return helper(stack);
        
    }
    
    
    console.log(deleteMid([10,20,30,40,50]));