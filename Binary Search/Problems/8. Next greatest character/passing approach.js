/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    let start = 0 ;
    let end  = letters.length - 1;
      if(target >= letters[end]){
          return letters[start]
      }
    while(start <= end){
      let mid = Math.floor(start + (end - start)/2);
  
      if(letters[mid] > target){
        end = mid - 1
      } else {
        start = mid + 1;
      }
    }
    return letters[start];
  };

/* https://stackoverflow.com/questions/73649231/next-greatest-alphabet-in-an-array-using-binary-search-algorithm?noredirect=1#comment130056469_73649231 */

/* 
If we use arr.length-1 then use start <= end
arr.length -> start < end 
*/