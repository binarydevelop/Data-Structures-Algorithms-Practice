let soln = function (string, pattern) {
    let stringLength = string.length;
    let patternLength = pattern.length;

    for(let i = 0; i <= stringLength - patternLength; ){
        let j;
        for(j = 0; j< patternLength; j++){
            if(pattern[j] != string[i+j]){
                break;
            }
        }
        if(j == patternLength){
            console.log(i);
        } 
        if(j == 0){
            i++;
        } else {
            i = i + j;
        }
    }
}

soln('ABCEABEFABCDABCD', 'ABCD'); //  8 12

// This is a linear time complexity solution why because the inner loop makes the outer loop jump i times saving i iterations. 
