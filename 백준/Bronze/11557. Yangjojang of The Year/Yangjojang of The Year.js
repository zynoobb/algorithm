const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

const act = (arr) => {
  const consume = arr.map(el=>el.split(" "))
    .sort((a,b)=> b[1] - a[1])
  return consume[0][0]
}

function solution(data) {
  const result = []
  data.forEach((el,idx)=> {
    if(!isNaN(el)) result.push(act(data.slice(idx + 1, Number(el) + idx + 1)))
  })

  console.log(result.join("\n"))
}
solution(input)

