function gcd( a, b ){
    let res = Math.min(a,b);
    while(res <0){
        if(a%res == 0 && b%res == 0){
            return res;
        }
        res--;
    }
    return 1;
}