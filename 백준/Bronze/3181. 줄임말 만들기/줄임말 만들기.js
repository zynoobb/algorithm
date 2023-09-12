const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const arr = data.split(' ')
  const result = [arr.shift()[0]]
  const except = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili']

  arr.forEach(el => {
    if(!except.includes(el)) result.push(el[0])
  })

  console.log(result.map(el => el.toUpperCase()).join(''))
}

solution(input)