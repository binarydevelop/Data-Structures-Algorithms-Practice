function isPalindrome(num) {
    let reversed = 0;
    let remainder;
    let original = num;
    while (num > 0) {
      remainder = num % 10;
      reversed = reversed * 10 + remainder;
      num = Math.floor(num / 10);
    }
    return original === reversed;
  }
  
// the idea is to reverse the number and then return of original num and revrsed is equal or not