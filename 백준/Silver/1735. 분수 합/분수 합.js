const fs = require('fs')
// const input = fs.readFileSync('입력/1735.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const inputData = input.map((el)=> el.split(" "))

function solution (data) {
  const [a1,a2] = data[0]
  const [b1,b2] = data[1]
  const mom = a2*b2
  const son = a1*b2 + a2*b1

  let y = mom
  let x = son

  while(x !== 0) {
    let temp = y%x
    y = x
    x = temp
  }

  console.log(`${son/y} ${mom/y}`)  
}

solution(inputData)