const fs = require('fs')
// const input = fs.readFileSync('입력/20920.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const limit = input.shift().split(" ")[1]

function solution(data) {
  let obj = {}

  const filtered = data.filter((el)=> el.length >= limit)
  filtered.forEach((el)=> {
    obj[el] = (obj[el] || 0) + 1
  })

  const result = Object.entries(obj).sort((a,b)=> {
    if(a[1] !== b[1]) return b[1]-a[1]
    else if(a[0].length !== b[0].length) return b[0].length - a[0].length
    else return a[0].localeCompare(b[0])
  }).map((el)=> el[0])

  console.log(result.join("\n"))
}

solution(input)