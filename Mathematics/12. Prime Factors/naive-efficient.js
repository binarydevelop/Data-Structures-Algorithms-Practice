getPrimeFactors = (n) => {
    let primeFactors = [];
    if(n == 1) return;

    for(let i = 2; i*i<=n; i++){
        while(n % i == 0){
            primeFactors.push(i);
            n = n/i;
        }
    }
    if(n>1){
        primeFactors.push(n);
    }
    return primeFactors.join(',');
}
