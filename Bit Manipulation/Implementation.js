class BitwiseMethods {
    constructor(num, i){
        this.num = num;
        this.i = i;
    }

    getBit(){
        return (this.num & (1 << this.i) !== 0)
    }

    setBit(){
        return (this.num & (1 << this.i))
    }

    clearBit(){
        return (this.num & ~(1<<this.i))
    }
}

let bitwiseObject = new BitwiseMethods(25,3);
console.log(bitwiseObject.getBit());
console.log(bitwiseObject.setBit());