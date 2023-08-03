The XOR (exclusive OR) operation is a bitwise operation that takes two equal-sized binary numbers and compares each bit. The result of the XOR operation is 1 if the two bits are different, and 0 if they are the same.

The key properties of XOR that make it useful for this problem are:

1. Associativity: The order in which you apply the XOR operation does not matter. In other words, `(a ^ b) ^ c` is the same as `a ^ (b ^ c)`.

2. Commutativity: The order of the operands does not matter. In other words, `a ^ b` is the same as `b ^ a`.

3. Cancellation Property: If you XOR a number with itself, the result is 0. For example, `a ^ a = 0`.

4. Zero Property: If you XOR a number with 0, the result is the number itself. For example, `a ^ 0 = a`.

Now, let's understand how these properties help us find the odd occurring number:

1. If a number occurs even times, pairing it with itself using XOR will result in 0 due to the Cancellation Property. For example, `a ^ a = 0`.

2. If we XOR all numbers together, all the even occurring numbers will cancel out, leaving only the odd occurring number. This is because the even occurring numbers will pair up and XOR to 0.

Let's illustrate this with a simple example:

Suppose we have the numbers `[4, 2, 4, 2, 6, 6, 7]`.

Binary representations:
- 4: `0100`
- 2: `0010`
- 6: `0110`
- 7: `0111`

Now, let's perform the XOR operation on all the numbers:

```
4 ^ 2 ^ 4 ^ 2 ^ 6 ^ 6 ^ 7
= (4 ^ 4) ^ (2 ^ 2) ^ (6 ^ 6) ^ 7
= 0 ^ 0 ^ 0 ^ 7
= 7
```

As you can see, the XOR operation leaves us with the odd occurring number, which is 7.

The XOR operation efficiently finds the odd occurring number while canceling out the even occurring numbers using bitwise properties. It's a simple and effective approach to this specific problem.