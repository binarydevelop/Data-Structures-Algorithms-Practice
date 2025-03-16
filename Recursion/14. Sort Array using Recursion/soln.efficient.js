function insertionSortRecursive(arr, n) {
    // Base case: If array size is 1 or less, it's already sorted
    if (n <= 1) return;

    // Recursively sort first (n-1) elements
    insertionSortRecursive(arr, n - 1);

    // Insert the last element at its correct position
    let last = arr[n - 1];
    let j = n - 2;

    // Shift elements to the right to create space for insertion
    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }

    // Place the last element at its correct position
    arr[j + 1] = last;
}

// Example Usage
let arr = [5, 3, 8, 4, 2];
insertionSortRecursive(arr, arr.length);
console.log(arr); // Output: [2, 3, 4, 5, 8]
