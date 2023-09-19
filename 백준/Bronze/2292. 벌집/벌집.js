const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {

  let [sum, block] = [1,1]
  while(block < data) {
    block += 6 * sum++
  }

  console.log(sum)
}

solution(input)
