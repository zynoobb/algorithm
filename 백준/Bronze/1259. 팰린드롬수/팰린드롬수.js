const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.pop()

const act = (str) => {
  const front = str.slice(0, str.length/2)
  const back = str.slice(str.length%2 === 0 ? str.length/2 : str.length/2 + 1)
    .split("").reverse().join("")
  
  front === back ? console.log("yes") : console.log("no")
}

function solution(data) {
  data.forEach((str)=> act(str))
}

solution(input)