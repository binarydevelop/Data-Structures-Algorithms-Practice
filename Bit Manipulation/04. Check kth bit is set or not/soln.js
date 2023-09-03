/* 
Sure, let's do a dry run of the corrected code with some sample inputs to see how it works using bitwise operations.

Suppose we want to check the 3rd (K = 3) bit of the number 'n', where 'n' is 12 in binary (1100 in binary).

1. First, we create a mask with the Kth bit set to 1:
   - K = 3, so the mask is created as follows:
     ```
     mask = 1 << 3
     mask = 0001 << 3 = 1000
     ```

   The mask is now 1000 in binary.

2. Next, we use the bitwise AND operator (&) to check if the Kth bit is set in 'n':
   - 'n' is 12 in binary: 1100
   - We perform the bitwise AND operation:
     ```
     1100 (n)
     1000 (mask)
     ----
     1000
     ```

   The result is 1000, which is not equal to 0.

3. Since the result of the bitwise AND operation is not 0, it means that the 3rd bit of 'n' is set (1), and we return `true`.

So, the function `checkKthBit(12, 3)` returns `true` because the 3rd bit of 12 is set.

Now, let's consider another example where we want to check the 2nd (K = 2) bit of the number 'n', where 'n' is 6 in binary (0110 in binary).

1. Create the mask with the 2nd bit set to 1:
   ```
   mask = 1 << 2
   mask = 0001 << 2 = 0100
   ```

   The mask is now 0100 in binary.

2. Perform the bitwise AND operation:
   - 'n' is 6 in binary: 0110
   - Bitwise AND:
     ```
     0110 (n)
     0100 (mask)
     ----
     0100
     ```

   The result is 0100, which is not equal to 0.

3. Since the result of the bitwise AND operation is not 0, it means that the 2nd bit of 'n' is set (1), and we return `true`.

So, the function `checkKthBit(6, 2)` returns `true` because the 2nd bit of 6 is set.
*/

function checkKthBit(n, k)
{
const mask = 1 << k;
return (n & mask) !== 0;
}



/* we can do using right shift operator as well */

function checkKthBit(n, k) {
    // Right-shift 'n' by 'k' positions and then check the least significant bit (bit 0).
    return ((n >> k) & 1) === 1;
}

/* You can certainly use right shift to check a specific bit in a number, but it requires a slightly different approach. If you want to check whether a particular bit is set (i.e., equal to 1), you can right-shift the number by the bit position you want to check and then use a bitwise AND operation to see if the result is 1. Here's how you can do it:

```javascript
function checkKthBit(n, k) {
    // Right-shift 'n' by 'k' positions and then check the least significant bit (bit 0).
    return ((n >> k) & 1) === 1;
}
```

Let's do a dry run of this code with the same examples:

1. Checking the 3rd bit of 12 (1100 in binary):

   ```
   n = 12 (1100 in binary)
   k = 3

   Right-shift n by k positions:
   n >> k = 1100 >> 3 = 0001

   Perform bitwise AND with 1:
   0001 & 0001 = 0001

   The result is 1, which is equal to 1, so we return true.
   ```

2. Checking the 2nd bit of 6 (0110 in binary):

   ```
   n = 6 (0110 in binary)
   k = 2

   Right-shift n by k positions:
   n >> k = 0110 >> 2 = 0001

   Perform bitwise AND with 1:
   0001 & 0001 = 0001

   The result is 1, which is equal to 1, so we return true.
   ```

Using right shift is a valid approach for checking individual bits, and it can be more efficient than creating a mask with a left shift if you only need to check a single bit. */