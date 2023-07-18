let sol = function(string, pattern){
    let strLength = string.length;
    let patternLength= pattern.length;
    
    for(let i = 0; i < strLength - patternLength; i++){
      let j = 0;
      for(j = 0; j<patternLength; j++){
        if(string[i+j] != pattern[j]){
          break;
        }
      }
      if(j == patternLength) console.log(i);
    }
   }
   
   console.log(sol('AAABAACAADAABAAABAA','AABA'));