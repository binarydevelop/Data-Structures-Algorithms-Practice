function isPalindrome(str, start, end){
    if(start >= end) return true;
    
    return (str[start] == str[end] && isPalindrome(str,start+1, end-1));
  }
  
  console.log(isPalindrome('aba',0,2));
// -----------------------------------------------------
/* Another Solution */
  function isPalindrome(str) {
    function helper(start,end){
      if(start >= end) return true;
      
      return str[start] == str[end] && helper(++start,--end);
    }
    
    return helper(0,str.length-1);
  }
  
  // Example usage:
  console.log(isPalindrome('aba')); // Output: true
  console.log(isPalindrome('abc')); // Output: false
  
  