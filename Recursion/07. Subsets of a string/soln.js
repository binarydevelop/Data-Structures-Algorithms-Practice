function recursiveSubset(str, curr='', index=0){
    if(index == str.length){
        console.log(curr);
        return; 
    }

    recursiveSubset(str, curr+str[index], index+1);
    recursiveSubset(str, curr, index+1);

    return;
}

recursiveSubset('abc');

/* 

Recursive Tree:
```
              ('abc', '', 0)
             /              \
 ('abc', 'a', 1)      ('abc', '', 1)
      /      \              /      \
('abc', 'ab', 2)  ('abc', 'a', 2)  ('abc', 'b', 2)
       /      \         /          \
('abc', 'abc', 3) ('abc', 'ab', 3) ('abc', 'ac', 3)
```

Call Stack (from the initial call to the last return):
1. `recursiveSubset('abc', '', 0)`
2. `recursiveSubset('abc', 'a', 1)`
3. `recursiveSubset('abc', 'ab', 2)`
4. `recursiveSubset('abc', 'abc', 3)`
5. `recursiveSubset('abc', 'ab', 3)`
6. `recursiveSubset('abc', 'a', 2)`
7. `recursiveSubset('abc', 'b', 2)`
8. `recursiveSubset('abc', '', 1)`
9. `recursiveSubset('abc', 'ac', 3)`
10. `recursiveSubset('abc', 'a', 3)`
11. `recursiveSubset('abc', '', 2)`
12. `recursiveSubset('abc', 'b', 3)`
13. `recursiveSubset('abc', '', 3)`

The recursive tree shows the sequence of function calls and how the `curr` and `index` parameters change.
The call stack indicates the sequence in which these function calls are pushed onto the call stack and returned.
In this way, the function explores all possible subsets of the input string `'abc'`.

*/