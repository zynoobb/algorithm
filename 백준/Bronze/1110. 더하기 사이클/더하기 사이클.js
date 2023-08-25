const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const def = data.length === 1 ? "0" + data : data
  const init = def
  let [compare, result] = [def, 1]

  while (true) {
    const [front,back] = compare.split('').map(Number)
    const nBack = String(front+back).at(-1)
    const n = back + nBack
    
    if(init !== n) {
      compare = n
      result ++
    } else {
      console.log(result)
      break
    }
  }
}

solution(input)