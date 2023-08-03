const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [str1, str2] = data.split(" ")
  
  let result = 0
  for(let i = 0 ; i < str1.length ; i++) {
    for(let j = 0 ; j < str2.length ; j++) {
      result += str1[i] * str2[j]
    }
  }

  console.log(result)
}

solution(input)
