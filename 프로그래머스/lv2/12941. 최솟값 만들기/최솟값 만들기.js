function solution(A,B){
    let sum = 0
    let a = A.sort((a,b)=>b-a)
    let b = B.sort((a,b)=>a-b)
  for(let i = 0 ; i<A.length; i++){
    sum += a[i]*b[i]
  }
    return sum
}