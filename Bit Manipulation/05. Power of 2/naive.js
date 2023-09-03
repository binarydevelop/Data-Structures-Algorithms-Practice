function isPowerOf2(n){
    if(n == 0) return false;
    while(n!=1){
        if(n%2  !== 0){
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(isPowerOf2(18));

// Interesting fact about power of 2 is they have only one bit set. 
// Ex: 4 ->  100 only one bit is set 
