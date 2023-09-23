const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [N,K] = data.split(' ').map(Number)
  const queue = Array.from({length : N}, (_,idx)=> idx + 1)
  
  const result = []
  let idx = 0
  while (queue.length) {
    const shift = queue.shift()
    idx++ % K === K - 1 ? result.push(shift) : queue.push(shift)
  }

  console.log(`<${result.join(', ')}>`)
}

solution(input)
