function solution(k, m, score) {
  let sorted = score.sort((a,b)=> b-a)
  sorted.unshift("empty")
  
  let result = 0
  
  let temp = []
  for(let i = 1 ; i < sorted.length ; i++){
      temp.push(sorted[i])
      if(i%m === 0){
        result += temp.at(-1)*m
        temp = []
      }
  }
  return result
}