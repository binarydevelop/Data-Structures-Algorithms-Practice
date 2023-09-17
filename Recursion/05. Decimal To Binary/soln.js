function decimalToBinary(n){
    if(n==0) return 0;

    return `${decimalToBinary(Math.floor(n/2)) + n%2}`;
}

decimalToBinary(233);