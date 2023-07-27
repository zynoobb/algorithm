const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const [_, boxSize] = input.shift().split(" ")

function solution(data) {
  const arr = data[0].split(" ").map((el)=> Number(el))
  let result = []
  let temp = 0

  for(let i = 0 ; i < arr.length ; i++) {
    if(temp === boxSize) {
      result.push(temp)
      temp = 0
    }

    if(temp + arr[i] > boxSize) {
      result.push(temp)
      temp = arr[i]
    } else if(temp + arr[i] <= boxSize) {
      temp += arr[i]
    }

    if(i === arr.length - 1 && temp !== 0) result.push(temp)
  }

  console.log(result.length)
}

input.length !== 0 ? solution(input) : console.log(0)
