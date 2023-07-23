function isPrime(n){
    if(n==1) return false;

    if(n==2 || n ==3) return true;

    if(n % 2 == 0 || n % 3 == 0) return false;

    for(let i = 5; i<= Math.sqrt(n); i+= 6){
        if(n % i == 0 || n % i+2 == 0){
            return false
        }
    }
    return true;
}

function getPrimeFactors(n){
    let primeFactors = [];
    for(let i = 2; i <= Math.sqrt(n); i++ ){
        if(isPrime(i)){
            let x = n;
            while(x % i == 0){
                primeFactors.push(i);
                x = x/i;
            }
        }
    }
    return primeFactors;
}

console.log(getPrimeFactors(12));