function solution(n){
    if (parseInt(n / 10) === 0)
        return 1;
    return 1 + solution(parseInt(n / 10));
}

console.log(solution(0));