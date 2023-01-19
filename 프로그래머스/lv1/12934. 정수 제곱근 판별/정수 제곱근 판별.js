function solution(n) {
    let sqrtN = Math.sqrt(n)
    return Number.isInteger(sqrtN) ? (sqrtN+1)**2 : -1
}