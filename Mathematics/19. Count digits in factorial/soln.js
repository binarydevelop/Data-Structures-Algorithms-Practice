function findDigits(n)
{
    // factorial exists only for n>=0
    if (n < 0)
        return 0;
 
    // base case
    if (n <= 1)
        return 1;
 
    // else iterate through n and calculate the
    // value
    let digits = 0;
    for (let i=2; i<=n; i++)
        digits += Math.log10(i);
 
    return Math.floor(digits) + 1;
}


/* 
The idea behind calculating the number of digits in the factorial of a number using logarithms is based on the mathematical properties of logarithms and the fact that the number of digits in a number can be determined by taking the base-10 logarithm of the number and adding 1.

Here's how the program works step by step:

1. **Function Definition**: We define a function called `factorialDigitsCount` that takes a single argument `n`, which is the number for which we want to calculate the number of digits in its factorial.

2. **Handling Special Cases**:
   - If `n` is negative, we return a message indicating that factorials are not defined for negative numbers.
   - If `n` is 0 or 1, we return 1 because the factorial of 0 and 1 is 1, which has one digit.

3. **Calculating the Factorial's Digit Count**:
   - For values of `n` greater than 1, we enter the else block.
   - We initialize a variable called `result` to 0. This variable will store the cumulative sum of logarithms of numbers from 2 to `n`.

4. **Iterating through Numbers**:
   - We use a `for` loop that iterates through numbers from 2 to `n`.
   - For each number `i` in the loop, we calculate `Math.log10(i)`, which gives us the base-10 logarithm of `i`. This represents the number of digits in `i`.
   - We accumulate this logarithm in the `result` variable.

5. **Returning the Result**:
   - After the loop completes, we have the sum of logarithms of all the numbers from 2 to `n` in the `result` variable.
   - To get the total number of digits in the factorial, we take the `Math.floor(result) + 1`. The `Math.floor` function rounds down the result to the nearest integer, and we add 1 to account for the first digit.

The key insight here is that we don't actually need to calculate the entire factorial,
which can become extremely large. Instead, we leverage the fact that the number of digits in a number can be calculated using logarithms,
which allows us to estimate the number of digits in the factorial without dealing with the full factorial value directly.
This approach is more efficient and avoids issues with very large numbers.

*/