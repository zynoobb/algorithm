const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [n,m] = data.split(' ').map(Number)
  
  console.log(
    m === 1 || m === 2 ? 'NEWBIE!'
    : m <= n ? 'OLDBIE!' 
    : 'TLE!'
  )
}

solution(input) 