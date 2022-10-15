//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [n,x] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.count(arr,n,x);
        console.log(res);
    
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number}
*/

class Solution {

    count(arr,n,key){
  let start = 0;
    let end = arr.length -1;
    let firstoccurence = -1;
    let lastoccurence = -1;

    
    while(start <= end){
      let mid = Math.floor(start + (end - start)/2);
      if(arr[mid] == key){
        firstoccurence = mid ;
        end = mid - 1;
      }
      if(arr[mid] < key){
        start = mid + 1;
      } else {
        end = mid -1;
      }
    }

    // find lastoccurence
    start = 0;
    end = arr.length -1; 
    while(start <= end){
      let mid = Math.floor(start + (end - start)/2);
      if(arr[mid] == key){
        lastoccurence = mid;
        start = mid ;
      }
      if(arr[mid] > key){
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    if(lastoccurence==-1 && firstoccurence==-1){
        return 0
      } else {
          return lastoccurence-firstoccurence+1
        }
    }
}