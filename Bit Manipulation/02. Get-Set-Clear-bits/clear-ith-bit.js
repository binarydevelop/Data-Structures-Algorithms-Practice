function clearIthBit(n,i){
    return (n & ~(i<<1));
}