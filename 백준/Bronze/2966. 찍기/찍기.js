const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

function solution(data) {
  const corrects = data[0].split('')
  const answers = ['ABC','BABC','CCAABB']
  const sum = [0,0,0]
  corrects.forEach((correct, i)=> {
    answers.forEach((answer, j)=> {
      if(correct === answer[i % answer.length]) sum[j] ++
    })
  })

  const names = ['Adrian', 'Bruno', 'Goran']
  const max = Math.max(...sum)
  const result = sum.map((el, idx)=> {
    if(el === max) return names[idx]
  }).filter((v)=> v)

  console.log([max, ...result].join('\n'))
}

solution(input)