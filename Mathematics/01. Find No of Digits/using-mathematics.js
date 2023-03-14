// Mathematically we can use the log for counting the digits in a number 
// since log (123) denotes what power of 10 is equqal to 123 
// so it's like 2.3... and if we take ceil of it which is the smallest integer greater or equal
// then we get 3 which is the correct answer 

function getNoOfDigits(N){
    return Math.ceil(Math.log10(N));

}