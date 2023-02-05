function solution(strings, n) {
  for(let i = 0 ; i < strings.length ; i ++){
    strings[i] = strings[i][n] + strings[i]
  }
  
  let result = strings.sort()
  
  for(let i = 0 ; i < result.length ; i ++){
    result[i] = result[i].substr(1)
  }
  return result
}