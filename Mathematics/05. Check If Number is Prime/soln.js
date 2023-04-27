function isPrime(n) {
    if (n <= 1) {
      return false;
    }
  
    // Check for divisors from 2 to sqrt(n)
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    // If no divisor found, the number is prime
    return true;
  }