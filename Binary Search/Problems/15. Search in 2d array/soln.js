function searchIn2DSortedMatrix(arr, key){
    let i = 0 ;
    let j = arr.length -1;
  
    while(i < arr.length - 1 && j >= 0){
      if(arr[i][j] == key){
        return[i,j]
      }
      if(arr[i][j] > key){
        j--
      } else {
        i++
      }
    }
    return -1;
  }
  
   let mat =        [[ 10, 20, 30, 40 ],
                     [ 15, 25, 35, 45 ],
                     [ 27, 29, 37, 48 ],
                     [ 32, 33, 39, 50 ]
                    ];
   console.log(searchIn2DSortedMatrix(mat,99));