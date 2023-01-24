function solution(d, budget) {
  let sort = d.sort((a,b)=>a-b)
  let result = []
  for(let i = 0 ; i < sort.length ; i++){
    result.push(sort[i])
   if(budget < result.reduce((a,b)=>a+b)){
     result.pop()
   } 
  }
  return result.length
}