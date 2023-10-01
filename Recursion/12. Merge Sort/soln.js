function mergeSort(arr) {
    // Base case: If the array has 0 or 1 elements, it is already sorted.
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves.
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively merge sort both halves.
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Merge the two sorted halves back together.
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller element to the merged array.
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in the left or right array, push them to the merged array.
    return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [3, 9, 10, 27, 38, 43, 82]
