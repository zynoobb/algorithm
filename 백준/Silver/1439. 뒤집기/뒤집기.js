const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let state
  let [zero, one] = [0,0]
  
  data.split('').forEach(el=> {
    if(state !== el) {
      state = el
      el === '0' ? zero ++ : one ++
    }
  })

  console.log(Math.min(zero, one))
}

solution(input)
