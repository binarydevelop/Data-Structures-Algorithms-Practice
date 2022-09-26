/* 

1213. Intersection of Three Sorted Arrays
Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

 

Example 1:

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.
 
*/

function BinarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == key) {
            return mid;
        }
        else if (arr[mid] > key) {
            end = mid - 1;
        }
        else if (arr[mid] < key) {
            start = mid + 1
        }
    }
    return -1
}

function commonElements(arr1, arr2, arr3, n1, n2, n3) {
    //code here
    let results = new Set();
    for (let i = 0; i < arr1.length; i++) {
        let one = BinarySearch(arr1, arr1[i])
        let two = BinarySearch(arr2, arr1[i])
        let three = BinarySearch(arr3, arr1[i])
        if (one >= 0 && two >= 0 && three >= 0) {
            results.add(arr1[i]);
        }
    }

    return Array.from(results);
}

