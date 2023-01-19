function solution(n) {
let answer = ''
  let arr =[...String(n)].sort((a,b)=> {
    return b-a
  })
  
  for(a of arr){
    answer += a
  }
  return Number(answer)
}