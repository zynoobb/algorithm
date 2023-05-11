function solution(a, b, c) {
  const pow = (x,n) => Math.pow(x,n)
  const act = (n) => pow(a,n) + pow(b,n) + pow(c,n)

  let nset = new Set([a,b,c])
  let dup = Math.abs(nset.size-4)
  
  let result = 1
  for(let i = 1 ; i <= dup ; i++) result *= act(i)
  
  return result
}