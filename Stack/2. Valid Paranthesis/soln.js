function validParanthesis(s){
    let stack = [];
    let bracketMap = {
      '(':')',
      '[':']',
      '{':'}'
    };
    
    for(let i = 0; i < s.length; i++){
      const currCharacter = s[i];
      
      if(bracketMap[currCharacter]){
        stack.push(currCharacter);
      } else {
        let lastBracket = stack.pop();
        if(bracketMap[lastBracket] !== currCharacter){
          return false; 
        }
      }
    }
    return stack.length == 0;
  }
  
  
  console.log(validParanthesis('(((){}([()])'));
  