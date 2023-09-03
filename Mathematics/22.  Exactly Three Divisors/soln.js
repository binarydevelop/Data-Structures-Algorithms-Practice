

//User function Template for javascript


/**
 * @param {number[]} query
 * @param {number} q
 * @returns {number[]}
*/

class Solution{
    
    getThreeDivisors(n){
        let count = 0;
        let sieveArray = new Array(n+1);
        sieveArray.fill(1, 0, n+1);
  
        for(let i = 2; i<= n; i++){
            if(sieveArray[i]){
              for(let j = 2 * i; j<= Math.sqrt(n); j+=i){
                sieveArray[j]=0;
              }
            }
          }
          
        for(let i = 2; i*i<=n; i++){
            if(sieveArray[i]){
              count++; 
            }
          }
          return count
        }
    
    threeDivisors(query, q){
        //code here
        let res = [];
        for(let i = 0; i<q; i++){
            res.push(this.getThreeDivisors(query[i]));
        }
        
        return res;
    }
}