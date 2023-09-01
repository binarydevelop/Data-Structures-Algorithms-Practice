function count(n){
    if(n==0) return 0;

    n= Math.floor(n/10);
    return 1 + count(n);
}