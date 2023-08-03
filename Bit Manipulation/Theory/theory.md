
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
