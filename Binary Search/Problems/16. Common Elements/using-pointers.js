function intersectionOfThreeSortedArray(nums1, nums2, nums3){
    let ptr1 = 0 ;
    let ptr2 =0 ;
    let ptr3 = 0 ;
    let results = [];
    
    while(ptr1 < nums1.length && ptr2 < nums2.length && ptr3 < nums3.length){
      if(nums1[ptr1] == nums2[ptr2] && nums2[ptr2] == nums3[ptr3]){
        results.push(nums1[ptr1])
        ptr1++;
        ptr2++;
        ptr3++;
      }
      if( nums1[ptr1] < nums2[ptr2] ){
        ptr1++;
      }
      if(nums2[ptr2] < nums3[ptr3]){
        ptr2++;
      } else {
        ptr3++;
      }
    }
    return results;
  }
  let nums1 = [2,2,4,5,9]
  let nums2 = [1,3,5,7,9]
  let nums3 = [0,1,3,8,9]
  
  console.log(intersectionOfThreeSortedArray(nums1, nums2, nums3))

  /* https://leetcode.ca/all/1213.html */