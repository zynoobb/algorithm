function solution(n) {
let answer = new Array(2).fill(1)
    
    for(let i = 0 ; i < n ; i ++){
      answer.push((answer[answer.length-1]+answer[answer.length-2])%1234567)
    }

    return answer[n-1]
}