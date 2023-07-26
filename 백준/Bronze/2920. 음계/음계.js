const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split(" ")
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ")

function solution(data) {
  const result = data.join("")

  if(result === "12345678") console.log("ascending")
  else if(result === "87654321") console.log("descending")
  else console.log("mixed")
}

solution(input)