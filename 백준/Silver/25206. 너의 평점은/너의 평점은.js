const fs = require('fs')
// const input = fs.readFileSync('입력/25206.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const inputData = input.map((el)=> {
  const temp = el.split(" ")
  const [_, grade, rank] = temp
  return el = [grade, rank]
}).filter((el)=> el[1] !== "P")

const obj = {
  "A+" : 4.5,
  "A0" : 4.0,
  "B+" : 3.5,
  "B0" : 3.0,
  "C+" : 2.5,
  "C0" : 2.0,
  "D+" : 1.5,
  "D0" : 1.0,
  "F" : 0.0
}

function solution (data) {
  let gradeSum = 0
  const sum = data.reduce((acc,cur)=> {
    const [grade, rank] = cur
    gradeSum += Number(grade)
    const temp = grade * obj[rank]
    return acc + temp
  },0)
  console.log((sum/gradeSum).toFixed(6))
}

solution(inputData)