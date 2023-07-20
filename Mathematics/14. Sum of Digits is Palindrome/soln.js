class Solution {
    
    getSum(num) {
      let sum = 0;
      while(num > 0){
        sum += num % 10;
        num = Math.floor(num/10);
      }
      return sum;
    }
    
    isPalindrome(num) {
      let reversed = 0;
      let remainder;
      let original = num;
      
      while(num>0){
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        
        num = Math.floor(num/10);
      }
      
      return original === reversed;
    }
    isDigitSumPalindrome(N){
       //code herelet 
       let sum = this.getSum(N);
       if(this.isPalindrome(sum)) return 1;
       return 0;
    }
}