# Divide and Conquer

- It is an important algorithm design technique based on recursion. 
- D & C Algorithm works by recursively breaking down a problem into two or more subproblems of same type until they become simple to be solved directly.   
    The solutions of the subproblems are then combined to give the solution to the original problem. 

    ## Strategy
    1. **Divide**
    2. **Apply recursion** : Recursively solving these subproblems. 
    3. **Conquer** : Appropriately combining their answers.  


- _It cannot be used for every problem_   
As per the definition of D&C the recursion solves the subproblems which are of same type. For all problems it is not possible to find subproblems which are of same type and same size hence D&C cannot be used for every problem. 

## Example
Assume  
```
    n -> size of the original problem 

    and we divide it into n/b small problems

// pseudocode
// p is the problem 
    DivideAndConquer(p){
        If small(p)
           // p is very small and solution is obvious 
           return solution 
        
        divide the problem p into k subproblems 
        p1, p2, p3 ... pk

        return (
            combine (
                DivideAndConquer(p1);
                DivideAndConquer(p2);
                DivideAndConquer(p3);
                .
                .
                .
                DivideAndConquer(pk);
            )
        )
    }
      
```

## Advantages of D&C Approcah : 
1. Solving difficult problems like _Tower of Hanoi_
2. Parallelism : subproblems can be solved parallely, as all subproblems are independent of each other. 
3. Easy to understand 

## Disadvantages of D&C Approcah : 
1. Recursion is slow 
2. Sometimes D&c solution is complex whereas iterative solution is simpler. 

## Applications 
1. Binary search 
2. Merge Sort 
3. Quick Sort 
4. Matrix Multiplication
5. Finding Maximum and Minimum
