function solution(s) {
  let x = s[0]
  let count = 0
  let result = []
  for(let i = 0 ; i < s.length ; i++){
    if(x === s[i]) {
      count ++
    } else {
      count --
    }
    
    if(count === 0) {
      x = s[i+1] 
    }
    result.push(count)
  }
  
  return result.at(-1) !== 0
    ? result.filter((a)=> a==0).length +1
    : result.filter((a)=> a==0).length
}