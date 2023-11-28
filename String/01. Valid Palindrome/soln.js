function removeNonAlphanumeric(inputString) {
    // Use a regular expression to match non-alphanumeric characters
    const regex = /[^a-zA-Z0-9]/g;
    
    // Replace non-alphanumeric characters with an empty string
    const resultString = inputString.replace(regex, '');

    return resultString;
}

function isPalindrome(str){
  let start = 0;
  let end = str.length - 1;
  
  while(start < end){
    if(str[start] !== str[end]){
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function soln(str){
  let truncatedString = removeNonAlphanumeric(str).toLowerCase();

  return isPalindrome(truncatedString);
}

/* https://leetcode.com/problems/valid-palindrome/solutions/3327333/using-inbuilt-function-time-complexity-o-n/ */
console.log(soln('A man, a plan, a canal: Panama'));
