function findFirstSetBit(n){
    if(n == 0) return 0;

    let rightmost_set_bit = n & ~(n-1); // this is done to have the rightmost bit to be set and others to be flipped.
    let position = Math.log2(rightmost_set_bit) + 1; // Math.log2 gives the power raised to 2.

    return position;
}

/* 
n & ~(n-1):

This expression is used to isolate the rightmost set bit of n.
It sets all bits of n to the right of the rightmost set bit to 0, while preserving the rightmost set bit and all bits to its left.

*/
