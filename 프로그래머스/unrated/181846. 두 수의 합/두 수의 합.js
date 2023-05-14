function solution(a, b) {
  a.length - b.length > 0 
    ? b = b.padStart(a.length,"0") 
    : a = a.padStart(b.length,"0")
  
  let result = ""
  let temp = 0
  for(let i = a.length - 1 ; i >= 0  ; i --) {
    let sum = Number(a[i]) + Number(b[i])
    if(temp !== 0) sum += temp
    if(sum >= 10) {
      temp = 1
      sum -= 10
    } else temp = 0
    result = sum + result
    
    if(i === 0 && temp === 1) result = 1 + result
  }
  
  return result
}