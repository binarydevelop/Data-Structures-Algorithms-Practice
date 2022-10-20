/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(sentence) {
    sentence = sentence.trim().split(" ").filter(ele => ele !== "");
    let p1 = 0;
    let p2 = sentence.length-1;

    while (p1 < p2 || p2 > p1) {
        [sentence[p1], sentence[p2]] = [sentence[p2], sentence[p1]];
        p1++;
        p2--;
    }

    return sentence.join(" ");
};

/* https://leetcode.com/problems/reverse-words-in-a-string/ */