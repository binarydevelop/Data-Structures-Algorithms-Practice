function getMinMax(arr){
    arr.sort((a,b) => {
        return a - b;
    })
    let mid = 0;
    let min = arr[0];
    let max = arr[0];

    if(arr.length == 1){
        return arr[0];
    }
    if(arr.length == 2){
        min = Math.min(min,max);
        max = Math.max(min,max);
        return {min, max}
    }
    mid = Math.floor( arr.length / 2 );
    
}