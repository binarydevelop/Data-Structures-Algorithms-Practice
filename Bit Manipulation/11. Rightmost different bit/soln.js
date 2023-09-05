function posOfRightMostDiffBit(m, n)
{
    // code here
if(m == n) return -1;


  let xored = m ^ n;
  let rightmostBit  = xored & ~(xored-1);
  let position = Math.log2(rightmostBit) + 1;
  
  return position;
}
