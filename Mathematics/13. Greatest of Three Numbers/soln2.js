function greatestOfThree(n,m,p){
    let max = n;
    if(max < m){
        max = m;
    }
    if(max < p){
        max = p;
    }
    return max;
}