const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let result = 10
  let str = data[0]
  for(let i = 1 ; i < data.length ; i++) {
    if(str.at(-1) === data[i]) result += 5
    else result += 10

    str += data[i]
  }

  console.log(result)
}

solution(input)