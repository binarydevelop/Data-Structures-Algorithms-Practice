function sortAnArray(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: already sorted or empty array
    }

    const temp = arr.pop();
    const sorted = sortAnArray(arr);
    const sortedA = [];

    while (sorted.length > 0 && temp < sorted[sorted.length - 1]) {
        sortedA.push(sorted.pop());
    }

    sorted.push(temp);
    while (sortedA.length > 0) {
        sorted.push(sortedA.pop());
    }

    return sorted;
}

const arr = [-3, 14, 18, -5, 30];
console.log(sortAnArray(arr)); // Output: [1, 2, 3, 4, 8, 9, 16, 28]
