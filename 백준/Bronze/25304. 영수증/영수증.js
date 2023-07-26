const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const sum = input.shift()
input.shift()

function solution(data) {
  const result = data.reduce((acc,cur)=> {
    const [price, num] = cur.split(" ")
    return acc + price*num
  },0)
  
  Number(sum) === result ? console.log("Yes") : console.log("No")
}

solution(input)