const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  let max = 1
  let temp = 1
  for(let i = 1 ; i < str.length ; i ++) {
    if(str[i] === str[i-1]) temp ++
    else {
      max = temp > max ? temp : max
      temp = 1
    }
    if(i === str.length - 1) {
      max = temp > max ? temp : max
    }
  }
  return max
}

function solution(data) {
  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)  
