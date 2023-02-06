function solution(n) {
  let result = new Array(2).fill(1)
  
  for(let i = 0 ; i < n ; i++){
    result.push((result[result.length-2]+ 
                 result[result.length -1])%1234567)
  }
  return result[result.length-2]
}