const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  const init = data[0].split(" ")
  const set = new Set(data[0].split(" "))
  const arr = Array.from(set).map(Number).sort((a,b)=> a-b)
  let table = {}
  arr.forEach((el,idx)=> table[el] = idx)

  let result = []
  init.forEach((el)=> result.push(table[el]))

  console.log(result.join(" "))
}

solution(input)
 