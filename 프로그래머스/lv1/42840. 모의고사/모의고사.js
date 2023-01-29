function solution(answers) {
      let a1 = [1,2,3,4,5,1,2,3,4,5]
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  let a3 = [3,3,1,1,2,2,4,4,5,5]
      let temp = []
  const a11 = answers.filter((el,i) => 
   el === a1[i % (a1.length)]
  )
  const a12 = answers.filter((el,i) => 
   el === a2[i % (a2.length)]
  )
  const a13 = answers.filter((el,i) => 
   el === a3[i % (a3.length)]
  )
  temp = [a11.length,a12.length,a13.length]
  
  const result = Math.max(...temp)
  
  let aaa = []
  for(let i=0; i<temp.length; i++){
    if(temp[i] === result){
      aaa.push(i+1)
    }
  }
  return aaa
}