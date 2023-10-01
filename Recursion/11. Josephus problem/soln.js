/* The Josephus problem is a classic problem in computer science and mathematics that involves a group of people standing in a circle,
 and they are eliminated one by one in a specific order. The problem is usually stated as follows:
  There are n people numbered from 1 to n, and they are standing in a circle.
   Starting with person 1, every k-th person is eliminated until only one person remains.
    Your goal is to find the position of the last person remaining.

Here's a recursive solution in JavaScript for the Josephus problem: */


function josephus(n, k) {
    if (n === 1) {
        return 1; // Base case: When there's only one person left, return their position (1-based).
    } else {
        // Calculate the position of the last person in a smaller circle of (n - 1) people.
        // We add 1 to the result because we're considering a 1-based position.
        return (josephus(n - 1, k) + k - 1) % n + 1;
    }
}

// Example usage:
const n = 7; // Number of people
const k = 3; // Elimination step

const position = josephus(n, k);
console.log(`The last person standing is at position ${position}`);


/* In this recursive solution:

- The base case is when there's only one person left (`n === 1`). In this case, we return their position, which is 1.

- In the recursive case, we calculate the position of the last person (`(josephus(n - 1, k) + k - 1) % n + 1`) by:
  - Recursively solving the problem for a circle with (n - 1) people.
  - Adding `k - 1` to the result, which represents the number of positions to skip before eliminating the next person.
  - Taking the modulus `n` to ensure that the position remains within the circle.
  - Adding 1 to the result to convert it to a 1-based position.

This recursive function will correctly determine the position of the last person remaining in the Josephus problem for the given `n` and `k`. */