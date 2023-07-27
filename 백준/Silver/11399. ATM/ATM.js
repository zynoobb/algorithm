const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let leng = input.shift()

function solution(data) {
  const sorted = data[0].split(" ").map((el)=> Number(el)).sort((a,b)=> a - b)

  const result = sorted.reduce((acc,cur)=> {
    let temp = cur * leng
    leng --
    return acc + temp
  }, 0)

  console.log(result)
}

solution(input)


// 1 * 5
// 2 * 4 
// 3 * 3 
// 3 * 2 
// 4 * 1 

