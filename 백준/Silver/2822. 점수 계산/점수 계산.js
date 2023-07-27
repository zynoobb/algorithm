const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let rankTable = {}
  const rankSorted = data.map((el)=> Number(el)).sort((a,b)=> b - a)
  rankSorted.forEach((el, idx)=> rankTable[el] = idx + 1)

  let resultSum = 0
  let result = []
  data.forEach((el, idx)=> {
    if(rankTable[el] <= 5) {
      result.push(idx + 1)
      resultSum += Number(el)
    }
  })

  console.log([resultSum,result.join(" ")].join("\n"))
}

solution(input)
