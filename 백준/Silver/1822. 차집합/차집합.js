const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  const result = {}
  data[0].split(" ").forEach((el)=> result[el] = true)
  data[1].split(" ").forEach((el)=> {
    if(result[el]) result[el] = false
  })
  
  if(Object.values(result).length === 0) console.log(0)
  else if(Object.values(result).length === 1) {
    console.log([1,Object.entries(result)[0][0]].join("\n"))
  } else {
    const sorted = Object.entries(result)
      .filter((el)=> el[1])
      .map((x)=> x[0])
      .sort((a,b)=> a - b)

    console.log([sorted.length, sorted.join(" ")].join("\n"))
  }
}

solution(input)
