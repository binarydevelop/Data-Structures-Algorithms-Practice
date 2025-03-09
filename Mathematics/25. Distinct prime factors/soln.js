function distinictprimeFactors(nums) {
    let productOfNumbers = nums.reduce((prev, acc) => prev *= acc, 1);
    let original = productOfNumbers; 
    let set = new Set();

    if (productOfNumbers < 3) return 1;

    while (productOfNumbers % 2 == 0) {
        set.add(2);
        productOfNumbers = productOfNumbers / 2;
    }

    while (productOfNumbers % 3 == 0) {
        set.add(3);
        productOfNumbers = productOfNumbers / 3;
    }
    let i = 5;

    for (let i = 5; i<= original; i += 6) {
        while (productOfNumbers % i == 0) {
            set.add(i);
            productOfNumbers = productOfNumbers / i;
        }

        while (productOfNumbers % (i + 2) == 0) {
            set.add(i + 2);
            productOfNumbers = productOfNumbers / (i + 2);
        }
    }

    return set.size;
}


let arr = [5,3];

console.log(distinictprimeFactors(arr));

