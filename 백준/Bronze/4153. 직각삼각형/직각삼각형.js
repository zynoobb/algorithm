const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.pop()

const act = (x,y,z) => {
  return Math.pow(x,2) === (Math.pow(y,2) + Math.pow(z,2)) ? "right" : "wrong"
}

function solution(data) {
  const sorted = data.map((el)=> {
    const [a,b,c] = el.split(" ").map((el)=> Number(el)).sort((x,y)=> y - x)
    return [a,b,c]
  })
  
  let result = []

  sorted.forEach((el)=> {
    const [a,b,c] = el
    result.push(act(a,b,c))
  })

  console.log(result.join("\n"))
}

solution(input)