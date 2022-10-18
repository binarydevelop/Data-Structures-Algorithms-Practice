/**
 * @param {number} n
 * @return {boolean}
 */
 var isStrictlyPalindromic = function(n) {
    base = 2

while(base<=n-2){
    x = findBase(n,base)
    if(isPallindrome(x)){
        flag = true;
        base++;
    }else{
        return false;
    }
}return flag;
};

var findBase = function(n,base){
return n.toString(base);
}
var isPallindrome = function(n){
a = String(n).split('').reverse().join('');
return n==a;
}

/* https://leetcode.com/problems/strictly-palindromic-number/ */