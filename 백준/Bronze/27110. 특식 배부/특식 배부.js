const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[n], arr] = data.map(el => el.split(' ').map(Number))
  
  const result = arr.reduce((acc,cur)=> {
    return acc + (n > cur ? cur : n)
  }, 0)

  console.log(result)
}

solution(input) 