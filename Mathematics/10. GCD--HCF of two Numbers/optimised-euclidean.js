function gcd(a,b){
if(b ==0){
    return a;
}
return gcd(b, a%b);
}
/* 
This code defines a function called gcd that calculates the greatest common divisor (GCD)
of two positive integers a and b using the Euclidean algorithm, which is based on the observation
that the GCD of two numbers does not change if the larger number is replaced by its difference with the smaller number.

The function takes two parameters a and b, which represent the two integers whose GCD is to be computed. 
If b is zero, then the GCD of a and b is a, so the function returns a.
Otherwise, the function recursively calls itself with the arguments b and the remainder of a divided by b using the modulo operator %,
which ensures that b is always smaller than a and that the GCD remains the same.

By recursively calling the function with smaller and smaller values of b,
the algorithm eventually reaches a point where b is zero, and the GCD is returned.
*/