/* Approach#1 Brute Force[Time Limit Exceeded]

The simplest approach is to rotate all the elements of the array in k steps by rotating
the elements by 1 unit in each step.

Java
public class Solution {
public void rotate(int[] nums, int k) {
int temp, previous;
Tor (int i= 0; i< k; i ++) {
previous nums [nums. Length -11;
for (int j= 0; j < nums.length; j ++) {
temp = nums[j];
nums[j] previous;
previous temp;
Complexity Analysis
• Time complexity:O(n2+k).All the numbers are shifted by
times(O(k)).
• Space complexity:0(1).No extra space is used.
*/




/* Approach 2 Using Extra Array[Accepted]
Algorithm
We use an extra array in which we place every element of the array at its correct
position i.e. the number at index i in the original array is placed at the index(i+k).
Then,we copy the new array to the original one. 


public class Solution (
public void rotate(int[] nums, int k) {
int[] a new int[nums.length];
for (int i= 0; i< nums.length; i ++) {
al(i+ k) % nums.length] = nums[1];
}
for (int i= 0; i< nums.length; i ++) {
nums[i] = a[i];
}
Complexity Analysis
• Time complexity:O(n). One pass is used to put the numbers in the new
And another pass to copy the new array to the original one.
• Space complexity:O(n).Another array of the same size is used.
*/


/* APPROACH 3

Approach#3 Using Cyclic Replacements [Accepted]
Algorithm
We can directly place every number of the array at its required correct position.But
we do that,we will destroy the original element. Thus,we need to store the number
being replaced in a temp variable. Then,we can place the replaced number(terup)
its correct position and so on,to times, where is the length of array. We have
chosen to be the number of replacements since we have to shift all the elements
the orray(which is n).But,there could be a problem with this method,it n where
k= kaince a value of k targer than eventually leads to a k equivalent to key.In this
casu,whlie picking up members to be placed at the correct position,we will eventually
reach the number frora which we originally started.Thus,in such a case,when we hit
the original number's index again, we start the same process with the number
following st
Now let's look at the proof of how the above method works Supocise, we have no as
the number of alements in the array and kise number of shitts required.Further,
assume n.Now,when we start placing the elements at their correct position,in the
first cycle all the numbers with their index satisfying i get placed at their required
position.This happens because when we jump k steps every time,we will only hit the
numbers k steps apart.We start with index = 0,having i. Thus,we hit all the
numbers satisfyind the above condition in the first cycle.When we reach back the



*/





/* 
# Approach 4
This approach is based on the fact that when we rotate the array k times,k elements
from the back end of the array come to the front and the rest of the elements from
the front shift backwards.
In this approach, we firstly reverse all the elements of the array.Then,reversing
first k elements followed by reversing the rest n -k elements gives us the required
result.
Let n = 7 and k =3.
Original List : 1234567
After reversing all numbers : 7 6 5 4 3 2 1
After reversing first k numbers : 5 6 7 4 3 2 1
After revering last n-k numbers : 5 6 7 1 2 3 4 --> Result */


function reverseByPoints(arr, start, end){
    while(start<=end){
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
    return arr;
  }
  function rotate(arr, k){
  
    k = k % arr.length ;
    let start = 0;
    let end = arr.length-1;
    reverseByPoints(arr,start,end);
    console.log(arr)
    reverseByPoints(arr, start, k-1)
      console.log(arr)
        reverseByPoints(arr,k, end)
          console.log(arr)
  
  }
  
  console.log(rotate([-1],2));