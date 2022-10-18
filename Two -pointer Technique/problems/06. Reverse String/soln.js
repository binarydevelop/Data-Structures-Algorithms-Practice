/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 function reverseString(arr){
    let start =0;
   let end = arr.length -1;
   
   while(start <= end){
     let temp = arr[start];
     arr[start] = arr[end];
     arr[end] = temp;
     start++;
     end--;
   }
   return arr;
 }
 /* https://leetcode.com/problems/reverse-string/ */