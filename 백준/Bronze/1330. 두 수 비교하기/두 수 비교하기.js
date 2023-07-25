const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const [a,b] = data.split(" ").map((el)=> Number(el))
  if(a > b) console.log(">")
  else if(a < b) console.log("<")
  else console.log("==")
}

solution(input)