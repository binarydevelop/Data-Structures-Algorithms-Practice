function findTwoMissingNumbers(arr, n) {
    let result1 = 0;
    let result2 = 0;
    let xor_result = 0;

    // Calculate the XOR of all numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        xor_result ^= i;
    }

    // Calculate the XOR of the input array
    for (let num of arr) {
        xor_result ^= num;
    }

    let set_bit_no = xor_result & ~(xor_result - 1);

    for (let i = 0; i < arr.length; i++) {
        if ((set_bit_no & arr[i]) === 0) {
            result1 ^= arr[i];
        } else {
            result2 ^= arr[i];
        }
    }
    return [result1, result2];
}

let arr = [1, 3, 5, 6];
console.log(findTwoMissingNumbers(arr, 6));

/* 
n & ~(n-1):

This expression is used to isolate the rightmost set bit of n.
It sets all bits of n to the right of the rightmost set bit to 0, while preserving the rightmost set bit and all bits to its left.

*/