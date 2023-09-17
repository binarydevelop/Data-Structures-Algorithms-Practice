function subsets(arr, curr = [], index=0){
    if(index == arr.length){
        console.log(curr);
        return;
    }
    curr.push(arr[index])
    subsets(arr, curr, index+1);
    curr.pop();
    subsets(arr,curr,index+1);
    return ;
}

subsets([1,2,3]);