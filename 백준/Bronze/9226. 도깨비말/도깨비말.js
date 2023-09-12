const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const vowels = ['a','e','i','o','u']
  let front = ''
  let idx = 0
  for(let i = 0 ; i < str.length ; i ++) {
    if(!vowels.includes(str[i])) front += str[i] 
    else {
      idx = i
      break
    }
    if(i === str.length - 1) idx = i+1
  }
  return str.slice(idx) + front + 'ay'
}

function solution(data) {
  data.pop()
  
  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)