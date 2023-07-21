function isPrime(n){
    if(n==1) return false;
    
    if(n==2 || n==3) return true;
    
    if(n%2==0 || n%3==0) return false;
    
    for(let i = 5; i*i<=n; i+=6){
      if(n%i == 0 || n % (i+2) == 0){
        return false;
      }
      
    }
    return true;
  }
  
  console.log(isPrime(10));

  /* 
  
The statement that prime numbers greater than 3 can be expressed in the form of 6k ± 1 is a mathematical property
that allows for a more efficient way to check for prime numbers.
This property is based on the observation that prime numbers greater than 3 are always either one less
or one more than a multiple of 6.
  */