const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const str = "CAMBRIDGE"
  let result = ""
  for(let i = 0 ; i < data.length ; i++){
    if(!str.includes(data[i])) result += data[i]
  }

  console.log(result)
}

solution(input)
 