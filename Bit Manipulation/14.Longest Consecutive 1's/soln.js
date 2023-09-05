function maxConsecutiveOnes(n)
{
    // code here
let maxStreak = 0;
let currentStreak = 0;
while(n>0){
if(n&1){
  currentStreak++;
} else {
  currentStreak = 0;
}


if(currentStreak > maxStreak){
  maxStreak = currentStreak;
}

n= n>>1;
}
return maxStreak;
}