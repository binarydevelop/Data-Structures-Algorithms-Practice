# Arithmetic and Geometric Progression
---

## Arithmetic Progression
If we have a series of numbers like 
```
2,4,6,8,10,....

then 
a -- first term = 2
d -- common difference = 2

the first term is 
a + 0d = 2
2nd = a + d = 4
3rd = a + 2d = 6

nth term = a + n-1*d
We know avg = sum
            -------
               n

    Then, sum = avg * n 
Sum of AP = (First Term + Last Term)
            ------------------------  * n
                      2
          =  (a + a + (n-1)d)
             ------------------------  * n
                      2
          =   n  
             --- (2a + (n-1)d) 
              2

```

---

## Geometric Progression

If we have a series of numbers like
```
2, 4, 6, 8, 10, 12...
```
A sequence of numbers is said to be in a Geometric progression if the ratio of any two consecutive terms is always the same. In simple terms, it means that the next number in the series is calculated by multiplying a fixed number to the previous number in the series. For example, 2, 4, 8, 16 is a GP because ratio of any two consecutive terms in the series (common ratio) is the same (4 / 2 = 8 / 4 = 16 / 8 = 2).

![](../00.%20Theory/assets/GP.png)

- Facts about Geometric Progression :  
    - Initial term: In a geometric progression, the first number is called the initial term.  
    - Common ratio: The ratio of any two consecutive terms by taking the previous term in the denominator.  
The behaviour of a geometric sequence depends on the value of the common ratio. If the common ratio is:
Positive, the terms will all be of the same sign as the initial term.
Negative, the terms will alternate between positive and negative.
Greater than 1, there will be exponential growth towards positive or negative infinity (depending on the sign of the initial term).
1, the progression is a constant sequence.
Between -1 and 1 but not zero, there will be exponential decay towards zero.
-1, the progression is an alternating sequence.
Less than -1, for the absolute values there is exponential growth towards (unsigned) infinity, due to the alternating sign.

- Formula of nth term of a Geometric Progression : If ‘a’ is the first term and ‘r’ is the common ratio. Thus, the explicit formula is: 
![](../00.%20Theory/assets/general%20term.png)

Sum of ‘n’ terms of a GP (r < 1) = [a (1 – rn)] / [1 – r].  
Sum of ‘n’ terms of a GP (r > 1) = [a (rn – 1)] / [r – 1].

## Quadratic Equations

A quadratic equation is a second-order polynomial equation of a variable say x. The general form of a quadratic equation is given as:
a*x2 + b*x + c = 0
Where a,b and c are real known values and,
a can't be zero.

Roots of an Equation: The roots of an equation are the values for which the equation satisfies the given condition. For Example, the roots of equation x2 - 7x - 12 = 0 are 3 and 4 respectively. If we replace the value of x by 3 and 4 individually in the equation, the equation will evaluate to zero.

A quadratic equation has two roots. The roots of a quadratic equation can be easily obtained by using the quadratic formula:
roots = (-b ± √(b2 - 4ac))/2a

There arises three cases as described below while finding the roots of a quadratic equation:
If b2 < 4ac, then roots are complex
(not real).
For example, roots of x2 + x + 1 = 0 are
-0.5 + i1.73205 and -0.5 - i1.73205

If b2 = 4ac, then roots are real 
and both roots are same.
For example, roots of x2 - 2x + 1 = 0 are 1 and 1

If b2 > 4ac, then roots are real 
and different.
For example, roots of x2 - 7x - 12 = 0 are 3 and 4

## Mean and Median

Mean is defined as the average of a given set of data. Let us consider the sequence of numbers 2, 4, 4, 4, 5, 5, 7, 9, the mean (average) of this given sequence is 5.
![](../00.%20Theory/assets/mean.png)

Median is the middle value of a set of data. To determine the median value in a sequence of numbers, the numbers must first be arranged in an ascending order.
If the count of numbers in the sequence is ODD, the median value is the number that is in the middle, with the same amount of numbers below and above.
If the count of numbers in the sequence is EVEN, the median is the average of the two middle values.
![](../00.%20Theory/assets/mdeian-1.png)

## Prime Number

A prime number is a whole number greater than 1, which is only divisible by 1 and itself. First few prime numbers are : 2, 3, 5, 7, 11, 13, 17, 19, 23, ........

## LCM and HCF
Factors and Multiples: All numbers that divide a number completely, i.e., without leaving any remainder, are called factors of that number. For example, 24 is completely divisible by 1, 2, 3, 4, 6, 8, 12, 24. Each of these numbers is called a factor of 24 and 24 is called a multiple of each of these numbers.

LCM : LCM stands for Least Common Multiple. The lowest number that is exactly divisible by each of the given numbers is called the least common multiple of those numbers. For example, consider the numbers 3, 31, and 62 (2 x 31). The LCM of these numbers would be 2 x 3 x 31 = 186.  
To find the LCM of the given numbers, express each number as its prime factors. The product of the highest power of the prime numbers that appear in the prime factorization of any of the numbers gives us the LCM.
For example, consider the numbers 2, 3, 4 (2 x 2), 5, 6 (2 x 3). The LCM of these numbers is 2 x 2 x 3 x 5 = 60. The highest power of 2 comes from prime factorization of 4, the highest power of 3 comes from prime factorization of 3 and prime factorization of 6, and the highest power of 5 comes from prime factorization of 5.


HCF : The term HCF stands for Highest Common Factor. The largest number that divides two or more numbers is the highest common factor (HCF) for those numbers. For example, consider the numbers 30 (2 x 3 x 5), 36 (2 x 2 x 3 x 3), 42 (2 x 3 x 7), 45 (3 x 3 x 5). 3 is the largest number that divides each of these numbers, and hence, is the HCF for these numbers.

HCF is also known as Greatest Common Divisor (GCD). Largest number which divides two or more numbers. 
To find the HCF of two or more numbers, express each number as its prime factors. The product of the minimum powers of common prime terms in both of the prime factorization gives the HCF. This is the method we illustrated in the above step.

Also, for finding the HCF of two numbers, we can proceed by the long division method. We divide the larger number by the smaller number (divisor). Now, we divide the divisor by the remainder obtained in the previous stage. We repeat the same procedure until we get zero as the remainder. At that stage, the last divisor would be the required HCF.

For example, HCF of 30 and 42:
![](../00.%20Theory/assets/HCF-1.png)

## Basic Euclidean Algorithm for HCF

The Euclidean algorithm is based on the below facts:
If we subtract the smaller number from larger (we reduce larger number), GCD doesn't change. So if we keep subtracting repeatedly the larger of two, we end up with GCD.
Now instead of subtraction, if we divide the smaller number, the algorithm stops when the remainder is found to be 0.

Below is the recursive function for finding GCD using Euclidean Algorithm:
```
gcd(a, b)
{
    if (a == 0)
        return b;

    return gcd(b % a, a);
}
```

Time Complexity: O(log(min(a, b)))

Important properties of LCM and HCF:
For two numbers say, 'a' and 'b', LCM x HCF = a x b.
HCF of co-primes = 1.
For two fractions,
HCF = HCF (Numerators) / LCM (Denominators)
LCM = LCM (Numerators) / HCF (Denominators)

## Permutations and Combinations
   (Arrangements)   (Selections)

Permutation: Let's say you have three different toys a ball, a car, and a doll. If you wanted to play with all three toys one after another you could put them in different orders.

For example: You could play with the ball first then the car and then the doll or you could play with doll first then car and then the ball. 

There are actually six different ways in which we can order these toys!

In this case the order of the toys matters. we're dealing with permutations. 

Permutation is the different arrangements of a given number of elements taken one by one, or some, or all at a time. For example, if we have two elements A and B, then there are two possible arrangements, AB and BA.

Number of permutations when 'r' elements are arranged out of a total of 'n' elements is n Pr = n! / (n - r)!. For example, let n = 4 (A, B, C and D) and r = 2 (All permutations of size 2). The answer is 4!/(4-2)! = 12. The twelve permutations are AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB and DC.

Permutation with repetition allowed  = N^N;
{1,2} == {{1,1}, {1,2}, {2,1}, {2,2}}

Permutation with duplicates: The number of permutations or arrangements of N objects of which p1 are of one kind, p2 are of second kind, ..., pk are of k-th kind and the rest if any, are of different kinds is: N! / (p1! * p2! *....*pk!).

### Combinations
Now lets say you have five different color blocks: red, blue, green, yellow and purple.

If you wanted to build a tower with three of these blocks you could pick any three blocks you wanted. 
You could pick the red, green and yellow blocks or you could pick yellow, green and purple. 

In this case the order in which you pick the blocks does not matter. If you pick the red, blues and green block it's the same as if you had picked the green blue and red blocks. 

- Basic Combinatorics rule: 
Suppose there are two sets A and B: 
1. The rule of product
2. The rule of sum

1. If there are x number of ways to choose one element from A and Y number of ways to choose one element from B, then there will be x*y number of ways to choose two elements, one from A and one from B. 

2. The rule of sum: If there are x number of ways to choose one element from A and Y number of ways to choose one element from B, then there will be x + y number of ways to choose one element that can belong to either A or to B.

Combination is the different selections of a given number of elements taken one by one, or some, or all at a time. For example, if we have two elements A and B, then there is only one way to select two items, we select both of them.

Number of combinations when 'r' elements are selected out of a total of 'n' elements is n C r = n! / [ (r !) * (n - r)! ]. For example, let n = 4 (A, B, C and D) and r = 2 (All combinations of size 2). The answer is 4!/((4-2)!*2!) = 6. The six combinations are AB, AC, AD, BC, BD, CD.