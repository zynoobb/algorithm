function solution(N, stages) {
  let obj = {}
  for(let i = 1 ; i <= N ; i ++ ){
    for(let j = 0 ; j <= stages.length ; j++){
      if(i===stages[j]){
        obj[i] = (obj[i] || 0) +1
      } 
    }
    if(!obj[i]){
      obj[i] = 0
    }
  }
  
  let result = {...obj}
  let leng = stages.length  
  
  for(let i = 1 ; i < Object.keys(obj).length +1 ; i++){
    result[i] = obj[i]/leng
    leng -= obj[i]  
  }
  
  let sorted = Object.entries(result).sort((a,b)=>b[1]-a[1])
  
  let answer = []
  for(let i = 0 ; i < Object.keys(sorted).length; i++){
    answer.push(Number(sorted[i][0]))
  }
  return answer
}