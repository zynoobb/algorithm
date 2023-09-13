const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (units) => {
  let min = 101
  const sum = units.reduce((acc,cur)=> {
    if(cur % 2 === 0) {
      min = cur < min ? cur : min
      return acc + cur
    } else return acc
  }, 0)
  return sum + ' ' + min
}

function solution(data) {
  data.shift()
  const arr = data.map(el => el.split(' ').map(Number))
  const result = arr.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)
