function reverseAStack(stack){
    if(stack.length <= 1) return stack;
    
    let temp = stack.shift();
    let reversed = reverseAStack(stack);
    let reversedStack = [...reversed];
    reversedStack.push(temp);
    return reversedStack;
  }
  
  let stack = [3,2,1,7,6];
  console.log(reverseAStack(stack));