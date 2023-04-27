function pairSum(A,B){
    let sumA= findArraySum(A);
    let SumB = findArraySum(B);

    return sumA*SumB;
}

function findArraySum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum; 
}