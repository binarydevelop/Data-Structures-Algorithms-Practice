function countBitsFlip(a, b)
{
    // code here
      let count = 0;
    let xored = a ^ b;
    while(xored > 0 ){
        if(xored & 1){
            count++;
        }
        xored = xored >> 1;
    }
    return count;
}