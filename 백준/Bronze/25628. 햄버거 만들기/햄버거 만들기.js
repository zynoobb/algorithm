const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [bread,patty] = data.split(' ').map(Number)
  const temp = bread/2 >= patty ? patty : bread/2

  console.log(~~temp)
}

solution(input) 