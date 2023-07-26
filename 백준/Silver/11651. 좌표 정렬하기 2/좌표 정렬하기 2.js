const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

function solution(data) {
  const sorted = data.map((el)=> {
    const [a,b] = el.split(" ")
    return el = [a,b]
  }).sort((c,d)=> {
    if(c[1] !== d[1]) return c[1] - d[1]
    else return c[0] - d[0]
  })

  const result = sorted.map((el)=> el = el.join(" "))
  console.log(result.join("\n"))
}

solution(input)