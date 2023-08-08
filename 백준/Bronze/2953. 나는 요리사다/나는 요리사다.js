const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const result = data.map((el,idx)=> {
    const score = el.split(" ").reduce((acc,cur)=> acc + Number(cur),0)
    const index = idx + 1
    return [index, score]
  }).sort((a,b)=> b[1] - a[1])

  console.log(result[0].join(" "))
}

solution(input)
 