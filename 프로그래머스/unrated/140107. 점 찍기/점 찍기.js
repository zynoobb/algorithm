function solution(k, d) {
  let result = 0
  const maxDistance = (a,b) => Math.sqrt(
      Math.pow(b,2)-Math.pow(a,2)
  )
  
  for(let i = 0 ; i <= d ; i += k)
    result += Math.floor(maxDistance(i,d)/k) + 1
  
  return result
}