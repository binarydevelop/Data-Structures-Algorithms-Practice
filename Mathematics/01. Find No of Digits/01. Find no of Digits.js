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