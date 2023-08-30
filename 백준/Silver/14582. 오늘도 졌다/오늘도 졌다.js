const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [a,b] = data.map(el=> el.split(' ').map(Number))

  const scores = []
  a.forEach((el, idx)=> {
    scores.push(el)
    scores.push(b[idx])
  })

  let states = 0
  let reverse = false
  for(let i = 0 ; i < scores.length ; i ++) {
    states += i % 2 === 0 ? scores[i] : - scores[i]
    if(states > 0) reverse = true
  }

  console.log(states < 0 && reverse ? "Yes" : "No")
}

solution(input)
