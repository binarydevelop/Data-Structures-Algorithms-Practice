
function findFloor(arr, n, x)
    {
        if(x < arr[0]){
            return -1;
        }
        
        let start = 0 ;
        let end = arr.length -1;
        
        while(start <= end){
            let mid = Math.floor(start + (end - start)/2);
            if(arr[mid] > x){
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
      return end ; 
    }
  
  let arr = [1,2,3,8,10,12,19];
  let key = 50;
  console.log(floorOfElem(arr,key));


  /* https://practice.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article */