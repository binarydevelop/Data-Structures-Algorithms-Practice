function sStack(stack){
    if(stack.length <= 1) return stack;
    
    let temp = stack.shift();
    let sorted = sStack(stack);
    let tempStack = [];
    
    while(sorted.length > 0 && temp > sorted[sorted.length-1]){
      tempStack.unshift(sorted.pop());
    }
    
    sorted.push(temp);
    while(tempStack.length >0){
      sorted.push(tempStack.shift());
    }
    return sorted;
  }
  
  
  const arr = [-3, 14, 18, -5, 30];
  console.log(sStack(arr));