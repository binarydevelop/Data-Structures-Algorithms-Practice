function countTrailingZeroes(n){
    let count = 0 ;
    while(n >= 5){
        count += Math.floor(n/5);
        n = n/5;
    }
    return count
}

// In this function we reduce the actual number by power of 5 until it becomes less than 5. 