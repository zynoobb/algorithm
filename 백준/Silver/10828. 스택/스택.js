const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

function solution(data) {
  let stack = []
  let result = []

  data.forEach((el)=> {
    const [cmd,card] = el.split(" ")
    
    if(cmd === "push") stack.push(Number(card))
    if(cmd === "pop") stack.length === 0 ? result.push(-1) : result.push(stack.pop())
    if(cmd === "size") result.push(stack.length)
    if(cmd === "empty") stack.length === 0 ? result.push(1) : result.push(0)
    if(cmd === "top") stack.length === 0 ? result.push(-1) : result.push(stack.at(-1))
  })

  console.log(result.join("\n"))
}

solution(input)