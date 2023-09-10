/* 
Brian Kernighan’s algorithm is used to find the number of set bits in a number. The idea behind the algorithm is that when we subtract one from an integer, all the bits following the rightmost set of bits are inverted, turning 1 to 0 and 0 to 1. The rightmost set bit also gets inverted with the bits right to it.

Let’s explore the following examples to understand this clearly.

Number	Bit Representation
23	10111
22	10110
21	10101
20	10100
Take two numbers from the table above, 22 and 21. The binary representation of 22 is 10110, and 21 is 10101.

The rightmost set bit in 22 and the bits after it are inverted. As a result, we get, 21, i.e., 10101.

Bit count of a number
Now, let’s discuss how to use the algorithm above to get the number of set bits in a number.

We know that when we subtract one, all the bits to the rightmost set bits of the number get inverted.

What if we apply the AND operator to the number and (number - 1)?

The number & (number - 1) will lead to unsetting of all the bits after the rightmost set bit.

Let’s take an example:

number = 10 = 1010
(number - 1) = 9 = 1001
number & (number - 1) = (1010 & 1001) = 1000
Now, with every rightmost set bit unsetting itself on subtraction, we can keep a counter that increments until we reach zero. This gives the number of set bits of a number.

The time complexity is 
O(logN)
The space complexity is 
O(1)
*/

function brian(n){
    let res = 0;
    while(n>0){
      n = (n & (n-1))
      res++;
    }
    console.log(res);
  }
  brian(5);