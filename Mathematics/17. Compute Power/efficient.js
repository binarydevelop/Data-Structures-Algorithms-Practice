function power(x,n){
  if(n==0) return 1;
  
  let halfPower = power(x, Math.floor(n/2));

  if(n%2==0){
    return halfPower * halfPower
  } else {
    return x * (halfPower * halfPower);
  }
}


console.log(power(4,3));


/* 
The reason why the power calculation is handled differently for even and odd exponents in the divide and conquer algorithm is to ensure an accurate result and avoid redundant calculations.

Let's consider the two cases:

1. When `n` is even: 

In this case, we divide the exponent `n` by 2, and we can calculate `x` raised to the power `n` as `(x^(n/2))^2`.
This is done to avoid redundant calculations.
We first compute `x` raised to the power of `n/2` (the result is stored in `halfPower`), 
and then we square it by multiplying `halfPower` with itself. 
This way, we are efficiently reusing the result and saving computation time. Since `n` is even, 
this process can be repeated, halving the exponent in each step, until `n` becomes 0 (base case).

2. When `n` is odd: 

In this case, we divide the exponent `n` by 2, but since `n` is odd, there is a remaining factor of `x`. 
The calculation becomes `x * (x^(n/2))^2`. 
Again, this approach is used to avoid redundant calculations. 
Similar to the even case, we calculate `x` raised to the power of `n/2` (the result is stored in `halfPower`), 
and then we square it by multiplying `halfPower` with itself. However, since `n` is odd, 
we also include an extra factor of `x` in the final result. 
This ensures that the result accurately accounts for the extra factor introduced by the odd exponent.

By handling even and odd exponents differently, 
the divide and conquer algorithm optimizes the calculations to achieve an overall time complexity of O(log n) for the power calculation. This is significantly more efficient than a straightforward iterative approach with a time complexity of O(n) for the power calculation.

*/