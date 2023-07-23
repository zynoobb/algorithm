const fs = require('fs')
// const input = fs.readFileSync('입력/1181.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const set = new Set(input)
const setData = Array.from(set).filter((el)=> isNaN(el))

function solution (data) {
  const result = data.sort((a,b)=> {
    if(a.length !== b.length) return a.length - b.length
    else return a.localeCompare(b)
  })
  console.log(result.join("\n"))
}

solution(setData)
