const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()
input.push(input.shift())
let inputData = []
let temp = []
for(let i = 0 ; i < input.length ; i ++) {
  if(isNaN(input[i])) temp.push(input[i])
  else {
    inputData.push(temp)
    temp = []
  }
}

const act = (arr) => {
  let obj = {}
  let sum = 1
  arr.forEach((el)=> {
    const [_, type] = el.split(" ")
    obj[type] = (obj[type] || 0) + 1
  })
  for(let value in obj) sum *= obj[value]+1
  return sum -1
}

function solution(data) {
  let result = []
  data.forEach((el)=> {
    result.push(act(el))
  })

  console.log(result.join("\n"))
}

solution(inputData)
