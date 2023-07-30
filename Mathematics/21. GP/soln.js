function gpOfNthTerm(a,b,n){
    if(n==1) return a;
    let cr = b/a;
    return (a * cr*(n-1));
}