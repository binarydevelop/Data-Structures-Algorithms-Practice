function countTrailingZeroes(n){
    let count = 0 ;
    for(let i = 5; i <= n; i = i*5){
        count += n/i;
    }
    return count
}
// In this code we do not decrement the actual number but try to extract the prime of 5 multiples. 
// n/5 , n/25, n/125 ... n/5^k 
