const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  let stack = []
  let result = []

  data.forEach((el)=> {
    const [cmd, num] = el.split(" ")
    
    if(cmd === "1") stack.push(num)
    else if(cmd === "2") stack.length !== 0 ? result.push(stack.pop()) : result.push("-1")
    else if(cmd === "3") result.push(stack.length)
    else if(cmd === "4") stack.length !== 0 ? result.push("0") : result.push("1")
    else if(cmd === "5") stack.length !== 0 ? result.push(stack.at(-1)) : result.push("-1")
  })
  console.log(result.join('\n'))
}

solution(input)

