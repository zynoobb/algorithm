const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const vowels = "aeiou"

  let result = ""

  for(let i = 0 ; i < data.length ; i ++) {
    result += data[i]
    if(vowels.includes(data[i])) i += 2
  }

  console.log(result)
}

solution(input)
 