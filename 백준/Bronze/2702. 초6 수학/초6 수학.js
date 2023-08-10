const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

const act = (a,b) => {
  let x = a > b ? a : b
  let y = a < b ? a : b

  while (y !== 0) {
    let temp = x%y
    x = y
    y = temp
  }
  return [a*b/x, x].join(" ")
}

function solution(data) {
  const arr = data.map((el)=> el.split(" "))
  let result = []
  arr.forEach((el)=> {
    const [q,w] = el.map((v)=>+v)
    result.push(act(q,w))
  })

  console.log(result.join(" "))
}

solution(input)
 