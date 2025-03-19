function reverse(stack){
  if(stack.length == 1) return stack;
  let elem = stack.pop();
  reverse(stack, elem);
  insert(stack, elem);
}

function insert(stack, elem){
    if(stack.length == 0) {
      stack.push(elem);
      return;
    };
    let top = stack.pop();
    insert(stack, elem);
    stack.push(top);
}


let stack = [ 3,2,1,7, 6];
reverse(stack);

console.log(stack);
