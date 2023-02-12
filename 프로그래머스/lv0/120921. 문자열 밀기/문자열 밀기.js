function solution(A, B) {
  let i = 0
  while(i < A.length + 1){
    if(A === B) return i
    A = A[A.length-1].concat(A).slice(0,A.length) 
    i++
  }
  return -1
}