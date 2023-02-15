function solution(n) {
  let result = 0  
  
  let i = 1
  while( i !== (Math.ceil(n/2))) {
    let temp = 0
    let j = i
    while (temp < n){
      temp += j
      if(temp > n) break
      if(temp === n) result ++
      j++  
    }
    i++
  }
  return result + 1
}