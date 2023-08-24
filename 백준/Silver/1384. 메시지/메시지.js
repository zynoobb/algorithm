const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.pop()

const act = (arr, idx) => {
  const n = Number(arr.shift())
  const matrix = arr.map((el)=> el.split(' '))
  const answers = [`Group ${idx + 1}`]
  
  matrix.forEach((arr,i)=> {
    arr.forEach((el,j)=> {
      let temp = i - j >= 0 ? i-j : n+i-j
      if(el === "N") answers.push(`${matrix[temp][0]} was nasty about ${arr[0]}`)
    })
  })

  if(answers.length === 1) answers.push('Nobody was nasty')
  answers.push('')
  return answers
}

function solution(data) {
  const testCase = []
  data.forEach((el, idx)=> {
    if(!isNaN(el)) testCase.push(data.slice(idx, Number(el) + idx + 1))
  })
  
  const storage = []
  testCase.forEach((el,idx)=> {
    storage.push(act(el, idx))
  })
  
  const result = storage.flat()
  result.pop()
  console.log(result.join('\n'))

}

solution(input)