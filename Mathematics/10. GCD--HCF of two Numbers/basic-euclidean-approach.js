function gcd(a,b){
    while(a!= b){
        if(a > b){
            a= a - b;
        } else {
            b = b-a;
        }
    }
    return a;
}

/* 
Process of Elimination:

This loop essentially performs a process of elimination by subtracting the smaller of the two numbers from the larger one repeatedly
until they become equal.
The reason behind this process is that the GCD of two numbers is the largest number that divides both of them.
By subtracting the smaller number from the larger one,
we are effectively reducing the problem to finding the GCD of the difference and the smaller number.
*/