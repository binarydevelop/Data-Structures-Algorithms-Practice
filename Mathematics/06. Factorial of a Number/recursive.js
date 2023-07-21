function recursiveFactorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * recursiveFactorial(n-1);
}


// Time Complexity
```
T(n) = T(n-1) + O(1) // it calls input with n-1 

```