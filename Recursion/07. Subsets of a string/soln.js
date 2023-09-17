function recursiveSubset(str, curr='', index=0){
    if(index == str.length){
        console.log(curr);
        return; 
    }

    recursiveSubset(str, curr+str[index], index+1);
    recursiveSubset(str, curr, index+1);

    return;
}

recursiveSubset('abc');