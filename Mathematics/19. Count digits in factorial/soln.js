function findDigits(n)
{
    // factorial exists only for n>=0
    if (n < 0)
        return 0;
 
    // base case
    if (n <= 1)
        return 1;
 
    // else iterate through n and calculate the
    // value
    let digits = 0;
    for (let i=2; i<=n; i++)
        digits += Math.log10(i);
 
    return Math.floor(digits) + 1;
}