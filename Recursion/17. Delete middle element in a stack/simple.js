function deleteMid(stack, indexToDelete = Math.floor(stack.length / 2)) {
    if (indexToDelete === 0) { // Correct base case
        stack.pop();
        return;
    }

    let top = stack.pop();
    deleteMid(stack, indexToDelete - 1);
    stack.push(top);
}

let stack = [5, 4, 3, 2, 1];
deleteMid(stack);

console.log(stack);
