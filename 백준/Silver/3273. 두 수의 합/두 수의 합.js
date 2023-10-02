const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [_,temp,[target]] = data.map(el => el.split(' ').map(Number))
  const sorted = [...temp].sort((a,b)=> a-b)
  let result = 0
  
  while(sorted.length > 1) {
    const [front, back] = [sorted[0], sorted.at(-1)]

    if(front + back === target) {
      result ++
      sorted.shift()
      sorted.pop()
    } else {
      (target > front + back) ? sorted.shift() : sorted.pop()
    }
  }

  console.log(result)
}

solution(input)  

