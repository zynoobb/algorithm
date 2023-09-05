const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const roll = (a,b) => {
  return a === "R" && b === "S" 
    || a === "P" && b === "R" 
    || a === "S" && b === "P" 
}

const act = (arr) => {
  const scores = [0,0]
  arr.forEach((el)=> {
    const [a,b] = el.split(' ')
    if(a !== b) 
      roll(a,b) ? scores[0] ++ : scores[1] ++
  })

  return scores[0] > scores[1] ? 'Player 1' 
       : scores[0] < scores[1] ? 'Player 2' : 'TIE'
}

function solution(data) {
  data.shift()

  const testCase = []
  data.forEach((el,idx)=> {
    if(!isNaN(el)) testCase.push(data.slice(idx + 1 , idx + 1 + +el))
  })

  const result = testCase.map((arr)=> act(arr))
  console.log(result.join('\n'))
} 

solution(input)
