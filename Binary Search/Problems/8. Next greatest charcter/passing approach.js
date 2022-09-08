var nextGreatestLetter = function(letters, target) {
    let left = 0; 
    let right = letters.length;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (letters[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return letters[left % letters.length];
};

/* https://stackoverflow.com/questions/73649231/next-greatest-alphabet-in-an-array-using-binary-search-algorithm?noredirect=1#comment130056469_73649231 */

/* 
If we use arr.length-1 then use start <= end
arr.length -> start < end 
*/