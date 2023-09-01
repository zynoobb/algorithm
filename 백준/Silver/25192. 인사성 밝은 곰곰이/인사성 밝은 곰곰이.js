const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()
function solution(data) {
  let result = 0
  let storage = {}

  data.forEach((el, idx)=> {
    if(el === 'ENTER') {
      result += Object.values(storage).length
      storage = {}
    } else storage[el] = true
    
    if(idx === N - 1) result += Object.values(storage).length
  })
  console.log(result)
}

solution(input)