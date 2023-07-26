function divisors(n){
    let res = [];
    for(let i=1; i*i<= n; i++){
      if(n%i==0){
        res.push(i);
        if(i != n/i){ // this is to handle the case when n is a perfect square like 25 we dont want to print 5 two times. 
          res.push(n/i);
        }
      }
    }
  
    res.sort((a,b) => a-b);
    
    return res;
  }
  console.log(divisors(25));