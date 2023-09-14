function reverseString(str) {
    // Base case: If the string has 0 or 1 character, it's already reversed.
    if (str.length <= 1) {
      return str;
    }
  
    // Recursive step: Reverse the substring excluding the first character,
    // and then concatenate the first character at the end.
    return str.slice(-1) + reverseString(str.slice(0, -1));
  }
  
  console.log(reverseString('abc fgh'));