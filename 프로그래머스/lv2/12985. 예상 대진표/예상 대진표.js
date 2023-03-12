function solution(n,a,b) {
  a%2 === 0 ? a = a : a = a+1
  b%2 === 0 ? b = b : b = b+1  
  
  let result = 1
  while(true){
    a = Math.ceil(a/2)
    b = Math.ceil(b/2)
    if(a === b) return result
    result ++
  }
}