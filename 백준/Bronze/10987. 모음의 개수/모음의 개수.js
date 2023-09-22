const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const vowels = 'aeiou'
  const result = data.split('').filter(el=> vowels.includes(el)).length
  console.log(result)
}

solution(input)
