function solution(n, k) {
    return new Array(Math.floor(n/k))
        .fill(k)
        .map((el,idx)=> el*(idx+1))
}