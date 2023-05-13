function lcm(a,b){
    let result = Math.max(a,b);
    while(true){
        if(res % a == 0 && res % b == 0) {
            return res;
        }
        res--;
    }
    return res;
}