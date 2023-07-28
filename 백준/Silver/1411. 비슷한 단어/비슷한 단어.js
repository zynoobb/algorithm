const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

const transform = (str) => {
  let obj = {}
  for(let i = 0 ; i < str.length ; i++) {
    if(!obj[str[i]]) obj[str[i]] = String(i)
  }

  let result = ""
  for(let s of str) result += obj[s]
  return result
}

function solution(data) {
  let table = {}

  data.forEach((el)=> {
    const temp = transform(el)
    table[temp] = (table[temp] || 0)  + 1
  })

  let result = 0
  for(let sum in table) result += (table[sum] * (table[sum]-1))/2
  
  console.log(result)
}

solution(input)
