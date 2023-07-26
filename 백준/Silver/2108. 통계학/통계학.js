const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const leng = input.shift()

function solution(data) {
  if(leng === "1") {
    const oneTarget = Number(data[0])
    console.log([oneTarget, oneTarget, oneTarget, 0].join("\n"))
    return
  }

  let obj = {}
  const arr = data.map((el)=> Number(el)).sort((a,b)=> a-b)
  
  arr.forEach((el)=> obj[el] = (obj[el] || 0) +1)

  const avg = Math.round(arr.reduce((acc,cur)=> acc + cur) / leng)
  const median = arr[leng/2 - 0.5]
  const mode = Object.entries(obj).sort((a,b)=> {
    if(a[1] !== b[1]) return b[1] - a[1]
    else return a[0] - b[0]
  })
  const mod = mode[0][1] === mode[1][1] ? Number(mode[1][0]) : Number(mode[0][0])
  const range = arr.at(-1) - arr[0]

  console.log([avg, median, mod, range].join("\n"))
}

solution(input)