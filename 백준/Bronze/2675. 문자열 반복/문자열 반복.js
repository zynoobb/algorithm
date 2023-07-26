const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  let result = []

  data.forEach((el)=> {
    const [times, str] = el.split(" ")
    let temp = ""
    let tempArr = [...str]
    tempArr.forEach((unit)=> {
      temp += unit.repeat(times)
    })
    result.push(temp)
  })

  console.log(result.join("\n"))
}

solution(input)