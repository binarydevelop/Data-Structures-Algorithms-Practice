function isPalindrome(num) {
    const numStr = String(num);
    return numStr === numStr.split('').reverse().join('');
  }