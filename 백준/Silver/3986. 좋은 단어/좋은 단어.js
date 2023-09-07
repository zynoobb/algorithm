const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[_], ...arr] = data

  const act = (str) => {
    const stack = []
    str.split('').forEach((el)=> {
      const top = stack.at(-1)
      const cur = el
      top === cur ? stack.pop() : stack.push(cur)
    })
    return !stack.length
  }
  
  const result = arr.map(el => act(el)).filter(x => x).length
  console.log(result)
}

solution(input)
