function validAnagram(s, t){
  
    if(s.length != t.length) return false
    let anagramMap = new Map();
    
    for(let i  = 0 ; i < s.length; i++){
      let currentChar = s[i];
      if(anagramMap.has(currentChar)){
        let count = anagramMap.get(currentChar);
        anagramMap.set(currentChar, count+1);
      } else {
        anagramMap.set(currentChar, 1);
      }
    }
    
    for(let i = 0; i < t.length; i++){
      let currentChar = t[i];
      if(anagramMap.has(currentChar)){
        let count = anagramMap.get(currentChar);
        anagramMap.set(currentChar, count-1);
      } else {
        return false;
      }
    }
    return hasZeroCount(anagramMap)
  }
  
  function hasZeroCount(map) {
      for (const [char, count] of map.entries()) {
          if (count === 0) {
              return true; // Character with count 0 found
          }
      }
      return false; // No character with count 0 found
  }
  
  
  let s = "aacc";
  let t = "ccac";
  
  console.log(validAnagram(s,t));

  /* https://leetcode.com/problems/valid-anagram/description/ */