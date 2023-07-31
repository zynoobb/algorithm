const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  const result = data.map((el)=> {
    const [a,b] = el.split(" ")
    return Number(a) + Number(b)
  })

  console.log(result.join('\n'))
}
solution(input)
