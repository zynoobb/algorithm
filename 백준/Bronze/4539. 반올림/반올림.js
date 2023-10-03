const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const arr = str.split('').map(Number)
  
  for(let i = arr.length - 1 ; i > 0 ; i --) {
    arr[i] > 4 && (arr[i-1] += 1)
    arr[i] = 0
  }
  return arr.join('')
}

function solution(data) {
  data.shift()

  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)  

