const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const arr = str.split(' ')
  arr.shift()
  const stack = []
  arr.forEach((el,idx) => {
    if(stack.at(-1) !== el) stack.push(el)
    if(idx === arr.length - 1) stack.push('$')
  })
  return stack.join(' ')
}

function solution(data) {
  data.pop()
  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)