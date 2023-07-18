function getFactorsOfNumber(n){
    let factors = [];
    for(let i = 1; i<= n/2; i++){
      if(n%i == 0){
        factors.push(i);
      }
    }
    return factors;
  }
  
  function isPrime(n){
    for(let i =2; i<= Math.sqrt(n); i++){
      if(n % i == 0){
        return false
      }
    }
    return true;
  }
  function getPrimeFactors(n){
    let results = [];
    const primeFactors = getFactorsOfNumber(n);
    for(let i = 0 ;i < primeFactors.length -1; i++){
      if(isPrime(primeFactors[i])){
        results.push(primeFactors[i]);
      }
    }
    return results;
  }
  
  console.log(getPrimeFactors(100000)); //5 