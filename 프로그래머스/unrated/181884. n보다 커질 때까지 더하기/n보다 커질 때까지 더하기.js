function solution(numbers, n) {
  let result = 0
    
  numbers.forEach((el)=> {
    if(result > n) return
    result += el
  })
  
  return result
}