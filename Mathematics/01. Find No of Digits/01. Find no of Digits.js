const findNoOfDigits= (n) => {
    let count = 0;
    while(n >= 1){   
        n = n/10;
        count++;
    }
    return count;
}

// taking n>=1 so that when input comes to 1 then 1/10 = 0.1 and
//  greater than 0 everytime and thus the program will go in an infinite loop

// Better and safe solution below
// Taking Floor means 0.1 == 0

function soln(n){
    let count = 0;
    while(n>0){
      count++;
      n = Math.floor(n/10);
    }
    console.log(count)
  }
  
  soln(2);