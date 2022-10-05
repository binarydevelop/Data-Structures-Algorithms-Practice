function searchMatrix(matrix, target){
    let numberOfRows = matrix.length
    let numberOFColums = matrix[0].length
  
    let upperBoundOfMatrix = numberOfRows * numberOFColums - 1;
    let start = 0
    while(start <= upperBoundOfMatrix){
      let mid = Math.floor(start + (upperBoundOfMatrix - start)/2);
      let row = Math.floor(mid/numberOFColums);
      let column = Math.floor(mid % numberOFColums);
      if(matrix[row][column] == target){
        return true
      }
      if(matrix[row][column] > target){
        upperBoundOfMatrix = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return false
  }
  
  let  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]] 
  let target = 30
  
  console.log(searchMatrix(matrix, target));

  /* https://leetcode.com/problems/search-a-2d-matrix/submissions/ */