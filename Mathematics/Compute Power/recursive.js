function power(x, n) {
    if (n === 0) return 1; // Base case: x^0 = 1

    let halfPower = power(x, Math.floor(n / 2)); // Compute x^(n/2)

    if (n % 2 === 0) {
        return halfPower * halfPower; // Even case: (x^(n/2))^2
    } else {
        return x * halfPower * halfPower; // Odd case: x * (x^(n/2))^2
    }
}

// Example Usage
console.log(power(2, 10)); // Output: 1024
