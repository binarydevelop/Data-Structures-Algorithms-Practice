function findMissingNumber(arr, n) {
    // Initialize the result with 1 to n XOR
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result ^= i;
    }

    // XOR the result with all the numbers in the array
    for (let num of arr) {
        result ^= num;
    }

    // The final value of 'result' will be the missing number
    return result;
}

// Example usage:
const arr = [1, 2, 4, 6, 3, 7, 8];
const n = 8; // The expected range of numbers is from 1 to 8
const missingNumber = findMissingNumber(arr, n);
console.log("The missing number is:", missingNumber);


/* 
In this program:

We first initialize result by XORing all numbers from 1 to n.
This is done using a loop that runs from 1 to n and accumulates the XOR result.

Then, we XOR result with all the numbers in the given array.
This step cancels out all the numbers that exist in both the expected range (1 to n) and the input array.

The final value of result will be the missing number, as it is the only number that wasn't canceled out by the XOR operations.
*/