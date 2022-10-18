/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let stringedNumber = String(x)
    let start =0;
    let end = stringedNumber.split().join().length-1;
        while(start<=end){
            if(stringedNumber[start] == stringedNumber[end]){
                start++;
                end--;        
            } else {
                return false
            }   
        }
     return true;
    };

    /* https://leetcode.com/problems/palindrome-number/submissions/ */