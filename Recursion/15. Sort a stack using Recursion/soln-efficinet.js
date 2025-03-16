function sortStack(stack){
    if(stack.length <= 1) return stack; 
    
    let temp = stack.pop();
    sortStack(stack);
    
    insertElem(temp, stack);
  }
  
  
  function insertElem(elem, stack){
    if(stack.length == 0 || stack[stack.length -1] < elem){
      stack.push(elem);
      return stack;
    }
    
    let temp = stack.pop();
    insertElem(elem, stack);
    stack.push(temp);
  }
  
  let stack = [3, 5, 1, 4, 2];
  sortStack(stack);
  console.log(stack);