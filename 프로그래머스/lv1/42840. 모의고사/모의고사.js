function solution(answers) {
let a1 = [1,2,3,4,5]
  let a2 = [2,1,2,3,2,4,2,5]
  let a3 = [3,3,1,1,2,2,4,4,5,5]
  
  while (answers.length > a1.length){
    a1 = a1.concat(a1)
    a2 = a2.concat(a2)
    a3 = a3.concat(a3)  
  }
  let sum1 = 0
  let sum2 = 0
  let sum3 = 0
  
  for(let i = 0 ; i < answers.length ;i++){
    if(a1[i] === answers[i]) sum1 ++
    if(a2[i] === answers[i]) sum2 ++
    if(a3[i] === answers[i]) sum3 ++
  }
  
  let max = Math.max(sum1, sum2, sum3)
  let result = []
  
  if(max === sum1) result.push(1)
  if(max === sum2) result.push(2)
  if(max === sum3) result.push(3)
  return result

}