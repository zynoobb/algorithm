const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (arr) => {
  const max = String(Math.max(...arr))
  const sum = arr.reduce((acc,cur)=> acc + + cur,0)
  const filter = arr.filter(v => v === max)
  const idx = arr.indexOf(max)
  return filter.length !== 1 
    ? 'no winner'
    : filter[0] > sum/2
    ? `majority winner ${idx + 1}`
    : `minority winner ${idx + 1}`
}

function solution(data) {
  data.shift()
  const testCases = []
  for(let i = 0 ; i < data.length ; i ++) {
    testCases.push(data.slice(i + 1, i + 1 + + data[i]))
    i += +data[i]
  }

  const result = testCases.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)  