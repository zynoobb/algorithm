const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.pop()

const act = (str) => {
  let count = 0
  for(let i = 2 ; i < str.length ; i++) {
    if(str[i].toLowerCase() === str[0]) count ++
  }

  return [str[0],count].join(' ')
}

function solution(data) {
  const result = data.map((el)=> act(el))
  console.log(result.join('\n'))
}

solution(input)