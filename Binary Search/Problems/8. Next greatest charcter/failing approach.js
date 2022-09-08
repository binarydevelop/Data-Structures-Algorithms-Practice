function nextGreatestAlphabet(letters, target){
    let left = 0; 
    let right  = letters.length - 1;
    let res = -1; 
          while(left <= right) {
              let mid = Math.floor(left + (right - left) / 2);
  
              if (letters[mid] == target ) { console.log(1)
                  res = letters[mid];
                  left = mid  + 1;
              }
              if(letters[mid] > target){  console.log(2)
                  right = mid -1;
                  res = letters[mid];
              }
              if(letters[mid] < target ){  console.log(3)
                left = mid + 1;
              }
          }
          return res;
  }
  
  console.log(nextGreatestAlphabet(["c","f","j"],"c")); 