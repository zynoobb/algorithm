const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N], ...arr] = data.map(el => el.split(' ').map(Number))
  const result = []

  arr.forEach((el, i) => {
    let rank = 1
    for(let j = 0 ; j < N ; j ++) {
      if(i !== j) {
        const [aw, at, bw, bt] = [...el, ...arr[j]]
        if(aw < bw && at < bt) rank ++
      }
    }
    result.push(rank)
  })
  console.log(result.join(' '))
}

solution(input) 