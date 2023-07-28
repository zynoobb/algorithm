const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const leng = Number(input.shift().split(" ")[0])

function solution(data) {
  const arr = data[0].split(" ")
  const lefts = arr.splice(0,leng)
  const rights = arr
  let rightTable = {}
  let result = 0

  rights.forEach((right)=> rightTable[right] = (rightTable[right] || 0) + 1)

  lefts.forEach((left)=> {
    if(rightTable[left]) result += (leng - rightTable[left])
    else result += leng
  })

  console.log(result)
}

solution(input)
