const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const result = data.map((el)=> {
    return el.split(' ')
      .reduce((acc,cur)=> acc + Number(cur),0)
  })

  console.log(Math.max(...result))
}

solution(input)