function solution(k, score) {
  let result = []
  let temp = []
  
  score.forEach((el)=> {
    temp.push(el)
    if(temp.length > k) {
      let idx = temp.indexOf(Math.min(...temp))
      temp.splice(idx,1)
    }
  result.push(Math.min(...temp))
  })
  
  return result
}