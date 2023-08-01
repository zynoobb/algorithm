const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  const [arr, ...cases] = data.map((str)=> str.split(" ").map((el)=> Number(el)))
  
  let table = {}
  table[0] = arr[0]

  arr.reduce((acc,cur,idx)=> {
    const temp = acc + cur
    table[idx] = temp
    return temp
  }, 0)
  
  const result = cases.map((el)=> {
    const [i, j] = el
    return table[j - 1] - (table[i - 2] || 0)
  })
  
  console.log(result.join('\n'))
}
solution(input)
