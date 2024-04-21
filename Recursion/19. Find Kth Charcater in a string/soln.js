function findKthCharacter(m, n, k) {
    // Convert decimal number m to binary
    let binaryString = m.toString(2);

    // Apply the transformation n times
    for (let i = 0; i < n; i++) {
        let newString = "";
        for (let j = 0; j < binaryString.length; j++) {
            if (binaryString[j] === "0") {
                newString += "01";
            } else {
                newString += "10";
            }
        }
        binaryString = newString;
    }

    // Retrieve the k-th character (1-indexed)
    return binaryString[k - 1];
}

// Example usage:
const m = 5; // Decimal number
const n = 3; // Number of iterations
const k = 5; // Kth character
const result = findKthCharacter(m, n, k);
console.log(result); // Output: 0
