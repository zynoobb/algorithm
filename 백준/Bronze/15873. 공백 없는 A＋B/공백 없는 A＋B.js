const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

const table = {
  '2' : (str) => +str[0] + + str[1],
  '3' : (str) => {
    const temp = str.split('10')
    return 10 + (temp[0] ? +temp[0] : +temp[1])
  },
  '4' : () => 20
}

function solution(data) {
  const result = table[data.length](data)
  console.log(result)
}

solution(input) 