function solution(hp) {
  let result = 0  
  
  result += Math.floor(hp/5)
  result += Math.floor((hp%5)/3)
  result += Math.floor(((hp%5)%3))
  
  return result
}