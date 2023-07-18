function lcm(a,b){
    let result = Math.max(a,b);
    while(true){
        if(result % a == 0 && result % b == 0) {
            return result;
        }
        result--;
    }
}