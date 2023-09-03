function gpOfNthTerm(a,b,n){
    if(n==1) return a;
    let cr = b/a;
    return ((a * (Math.pow(r,n-1) % 1000000007 ) ) % 1000000007);
}