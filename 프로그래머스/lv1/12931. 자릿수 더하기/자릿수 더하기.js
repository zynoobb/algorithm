function solution(n){
    let answer = 0
  
    for(a of [...String(n)]){
    answer += Number(a)
  }
  return answer
}