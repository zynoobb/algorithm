const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [N, K] = data.split(' ').map(Number)
  const table = {}
  let count = 1

  for(let i = 2 ; i <= N ; i ++) {
    for(let j = i ; j <= N ; j += i) {
      if(count === K && !table[j]) {
        console.log(j)
        return
      }

      if(!table[j]) table[j] = count++
    }
  }
}

solution(input)

