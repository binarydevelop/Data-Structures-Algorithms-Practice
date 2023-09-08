function findSubsets(str) {
  const n = str.length;
  const result = [];

  // Iterate from 0 to 2^n (exclusive)
  for (let i = 0; i < Math.pow(2, n); i++) {
    let subset = '';

    // Check each bit of the binary representation of i
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subset += str[j];
      }
    }

    result.push(subset);
  }

  return result;
}

const str = 'abc';
const subsets = findSubsets(str);
console.log(subsets);