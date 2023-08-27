const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

const findChar = (s) => {
  return s.charCodeAt() - 65
}

const act = (arr) => {
  const [alp, num] = arr

  const alp26 = alp.split('').map((el,idx)=> {
    const convent = el.charCodeAt() - 65
    return convent * Math.pow(26, 2 - idx)
  }).reduce((ac,cur)=> ac + cur)
  return Math.abs(alp26 - Number(num)) <= 100 ? "nice" : "not nice"
}

function solution(data) {
  const testCase = data.map(el=>el.split('-'))
  const result = testCase.map(el=>act(el))
  console.log(result.join('\n'))
}

solution(input)
