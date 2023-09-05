function isSparse(n)
{
if(n == 0) return 1;

let lastBitFlag = 0;
while(n >0){
if((n&1) && lastBitFlag) {
  return 0;
}

if(n&1){
  lastBitFlag = 1;
} else  {
  lastBitFlag = 0;
} 
n = n >> 1;
}
return 1;
}