const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")

function solution(data) {
  const [init,target] = data
  let result = -1
  let queueIdx = 0
  const queue = [[1, init]]
  
  while (queue.length > queueIdx) {
    const [idx, sum] = queue[queueIdx]
    
    if(sum === target) {
      result = idx
      break
    } else if(Number(sum) < target) {
      queue.push([idx + 1, sum + 1])
      queue.push([idx + 1, String(sum * 2)])
    }
    queueIdx ++
  }
  
  console.log(result)
}

solution(input)
 