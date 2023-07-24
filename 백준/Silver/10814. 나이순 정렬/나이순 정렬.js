const fs = require('fs')
// const input = fs.readFileSync('입력/10814.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()
const inputData = input.map((el)=> {
  const [age, name] = el.split(" ")
  return el = [age, name]
})


function solution (data) {
  let obj = {}

  data.forEach((el,idx)=> obj[el[1]] = idx)

  const result = data.sort((a,b)=> {
    if(a[0] !== b[0]) return a[0]-b[0]
  })

  console.log(result.map((el)=> el.join(" ")).join("\n"))
}

solution(inputData)