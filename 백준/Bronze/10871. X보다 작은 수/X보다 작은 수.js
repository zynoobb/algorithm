const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const limit = input.shift().split(" ")[1]

function solution(data) {
  const arr = data[0].split(" ").map((el)=> Number(el))
  console.log(arr.filter((el)=> el < limit).join(" "))
}

solution(input)
