## Binary Search

Linear seach is something which takes n time for input value n .

The data need not to be perfectly sorted to apply binary search.   
Binary Search can be applied on a search space when a large space of data can be removed or
pruned on basis of some pattern/condition. 

If the problem is sorted and the question is to find or search something we should check binary search as an option. 

- [Variants of binary search](https://www.geeksforgeeks.org/variants-of-binary-search/)
- Please note that if we change the binary search boundary conditions to left <= right, then we need to change to right = mid – 1 accordingly.


Related Problems For Practice :
Book Allocation Problem (GFG)
Aggressive cow (spoj)
Prata and roti (spoj)
EKO (spoj)
Google kickstart A Q-3 2020



### Resources 
- Aditya Verma Youtube Playlist 

### Practice 
- Aditya Verma Youtube Playlist 
- [Leetcode](https://leetcode.com/tag/binary-search/)

Leetcode  -  1011, 2187 , 2064 , 374

Whenever there is a question to search a value and if the value does not exist the closest value will be end. 
In any case start denotes the floor and end denotes the ceil of an element in a binary search.

## Why is mid calculated like that ? 

In binary search, we are trying to find a target element in a sorted array. To do this, we divide the array in half repeatedly until we either find the target element or exhaust the array.

To find the midpoint of the array, we calculate the average of the start and end indices. However, if we simply use the formula (start + end) / 2 to calculate the midpoint, there is a risk of integer overflow when the array size is large. This is because the sum of start and end might exceed the maximum value that can be represented by an integer data type.

Therefore, to avoid integer overflow, we use the formula mid = start + (end - start) / 2 to calculate the midpoint. This formula is equivalent to (start + end) / 2, but is computed in a way that avoids integer overflow.

In this formula, we first compute the distance between start and end by subtracting start from end. We then divide this distance by 2 to find the midpoint between start and end. Finally, we add this midpoint to start to get the index of the middle element in the array.

By using this formula, we can avoid integer overflow and safely find the midpoint of the array, which is essential for the binary search algorithm to work correctly.