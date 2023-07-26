let getDivisors = (n) => {
    let res = [];
    let i;
    for( i = 1; i*i<n; i++){
        if(n%i==0){
            res.push(i);
        }
    }
    for( ; i>=1; i--){
        if(n%i==0){
            res.push(n/i);
        }
    }
    return res;
}