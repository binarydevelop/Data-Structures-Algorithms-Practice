function iterativeTrailingZeroes(n){
    let res = 1;
    let count = 0; 
    for(let i = 2; i<=n ; i++){
        res *= i; 
    }
    while(res % 10 == 0) {
      count++;
      res = res/ 10;
    }
    return count; 
}

console.log(iterativeTrailingZeroes(5));

// calculate Factorial 
// Then count trailing Zeroes