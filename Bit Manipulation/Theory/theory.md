
# Get Bit:

This method is used to find the bit at a particular position(say i) of the given number N. The idea is to find the Bitwise AND of the given number and 2i that can be represented as (1 << i). If the value return is 1 then the bit at the ith position is set. Otherwise, it is unset.

```
<script>

// Function to get the bit at the
// ith position
function getBit(num, i)
{
	
	// Return true if the bit is
	// set. Otherwise return false
	return ((num & (1 << i)) != 0);
}

// This code is contributed by Ankita saini

</script>

```

1. `(1 << i)`: This expression shifts the binary representation of the number 1 by `i` positions to the left. The binary representation of 1 is `0001`. So, if `i = 3`, `(1 << 3)` would be `1000` in binary.

2. `num & (1 << i)`: The `&` operator is the bitwise AND operator. It performs a bitwise AND operation between the binary representation of `num` and the binary representation of `(1 << i)`.

Let's consider an example to illustrate the bitwise AND operation:

Suppose `num = 25` and `i = 3`:
- Binary representation of `num` is `25` (which is `11001` in binary).
- Binary representation of `(1 << 3)` is `1000` in binary.

Now, we perform the bitwise AND operation:

```
  11001  (num)
& 01000  (1 << i)
-------
  01000
```

The result of the bitwise AND operation is `01000` in binary, which is `8` in decimal.

The explanation of what happens during the bitwise AND operation:
- Each bit in the result is determined by performing AND operation on corresponding bits of `num` and `(1 << i)`.
- When both corresponding bits are 1, the result bit is set to 1; otherwise, it is set to 0.

In the example above, the third bit from the right (counting from 0) in `num` is 1 (it is `1` in `11001`), and the corresponding bit in `(1 << i)` is 0 (it is `0` in `01000`). So, the result bit in the output is 0.

The bitwise AND operation sets all the bits to 0 except the bit at the `i`-th position of `num`. If the `i`-th bit of `num` is set (i.e., 1), this expression would result in a nonzero value (as shown in the example). Otherwise, if the `i`-th bit is not set (i.e., 0), the result would be 0.


# clearBit

```javascript
function clearBit(num, i) {
    let mask = ~(1 << i);
    return num & mask;
}
```

This function is designed to clear (set to 0) the bit at the `i`-th position of the binary representation of the number `num`.

Here's how it works:

1. `~(1 << i)`: This expression creates a mask with all bits set to 1 except the `i`-th bit, which is set to 0. Let's see an example:

   Suppose `i = 3`:
   - Binary representation of `(1 << i)` is `0001` shifted 3 positions to the left, resulting in `1000`.
   - Then, taking the bitwise NOT (`~`) of `1000`, we get `0111`. This is the mask with all bits set to 1 except the 3rd bit, which is 0.

2. `num & mask`: The `&` operator is the bitwise AND operator. It performs a bitwise AND operation between the binary representation of `num` and the binary representation of `mask`. The result will have the `i`-th bit of `num` cleared (set to 0) while leaving other bits unchanged.

Let's consider an example:

Suppose `num = 25` (which is `11001` in binary) and `i = 3`:
- Binary representation of `num` is `11001`.
- The mask we calculated earlier is `0111`.

Now, we perform the bitwise AND operation:

```
  11001  (num)
& 0111   (mask)
-------
  01001
```

The result of the bitwise AND operation is `01001` in binary, which is `9` in decimal.

In the example above, the third bit from the right (counting from 0) in `num` is 1 (it is `1` in `11001`). The corresponding bit in the mask is 0 (it is `0` in `0111`). When we perform the bitwise AND operation, the third bit is cleared (set to 0), while the other bits remain unchanged.

So, the updated value after clearing the bit at the `i`-th position is `9`.

The `clearBit` function is useful when you want to manipulate or modify individual bits in a number. By setting a bit to 0, you effectively clear it, and by setting a bit to 1, you can set it.