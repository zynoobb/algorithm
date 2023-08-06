const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  const result = data.map((el)=> {
    const [name, d, m, y] = el.split(" ")
    return [y,m,d,name]
  }).sort((a,b)=> {
    if(a[0] !== b[0]) return a[0] - b[0]
    else if(a[0] === b[0]) return a[1] - b[1]
    else if(a[1] === b[1]) return a[2] - b[2]
  })

  console.log([result.at(-1)[3], result[0][3]].join("\n"))
}

solution(input)
 