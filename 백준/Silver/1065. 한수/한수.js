const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

const upper100 = (n) => {
  let hansu = 99

  for(let i = 100 ; i <= n ; i ++) {
    const str = String(i)
    str[0] - str[1] === str[1] - str[2] && hansu ++
  }

  return hansu
}

function solution(data) {
  const result = data < 100 
    ? data
    : upper100(data)

  console.log(result)
}

solution(input)
