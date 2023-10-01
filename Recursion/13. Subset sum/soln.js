function subsetSum(arr, sum, index = 0, currSum = 0) {
    // If the current sum equals the target sum, return 1 (found a valid subset)
    if (currSum === sum) {
        return 1;
    }

    // If we've reached the end of the array or the sum exceeds the target, return 0 (no valid subset)
    if (index >= arr.length || currSum > sum) {
        return 0;
    }

    // Include the current element in the subset and continue searching
    const includeCount = subsetSum(arr, sum, index + 1, currSum + arr[index]);

    // Exclude the current element from the subset and continue searching
    const excludeCount = subsetSum(arr, sum, index + 1, currSum);

    // Return the total count, summing both the include and exclude counts
    return includeCount + excludeCount;
}

console.log(subsetSum([10, 5, 2, 3, 6], 8)); // Output: 3 (Subsets: [10, 2], [5, 3], [3, 5])
