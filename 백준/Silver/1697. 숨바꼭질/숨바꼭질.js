const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")

function solution(data) {
  const [now,target] = data.map(Number)
  
  let result
  let queue = [[now, 0]]
  let queueIdx = 0
  let visited = {}

  while (queue.length) {
    const [location, times] = queue.shift()
    if(visited[location]) continue
    
    if(location === target) {
      result = times
      break
    } 
    const temp = [location -1, location +1, location*2]
    if(location -1 === target || location +1 === target || location*2 === target) {
      result = times +1
      break
    }else {
      visited[location] = true
      temp.forEach((next)=> {
        if(!visited[next] && next > 0 && next <= 100000) {
          queue.push([next, times +1])
        }
      })
    }    
    queueIdx++
  }

  console.log(result)
}

solution(input)
