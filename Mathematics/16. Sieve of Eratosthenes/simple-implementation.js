const soln = (n) => {
    let isPrimeArray = new Array(n+1);
    isPrimeArray.fill(1, 0, n+1);
  
    for(let i = 2; i <= Math.sqrt(n); i++) {
      if (isPrimeArray[i]) {
        for(let j = i * i; j <= n; j += i) {
          isPrimeArray[j] = 0;
        }
      }
    }
  
    let primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrimeArray[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  console.log(soln(20));

/* The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so  */