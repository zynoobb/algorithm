const fs = require('fs')
// const input = fs.readFileSync('입력/1269.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()
const inputData = input.map((el)=> {
  return el = el.split(" ")
})
const [a,b] = inputData

const calcul = (x,y) => {
  let obj = {} 

  x.forEach((el)=> obj[el] = true)
  y.forEach((el)=> obj[el] = false)
  return Object.entries(obj).filter((el)=> el[1]).length
}


function solution (a,b) {
  console.log(calcul(a,b) + calcul(b,a))
}

solution(a,b)
