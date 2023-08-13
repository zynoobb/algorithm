const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const verity = ([x,y]) => {
  if(x === 0 || y === 0) return "AXIS"
  else if(x > 0 && y > 0) return "Q1"
  else if(x < 0 && y > 0) return "Q2"
  else if(x < 0 && y < 0) return "Q3"
  else return "Q4"
}

function solution(data) {
  const arr = data.map(el=>el.split(" ").map(Number))
  const table = {}
  const tableName = ["Q1", "Q2", "Q3", "Q4", "AXIS"]
  tableName.forEach(el=> table[el] = 0)
  arr.forEach((el)=> table[verity(el)] ++)

  const result = Object.entries(table).map((el)=> {
    const [name, num] = el
    return `${name}: ${num}` 
  }).join("\n")

  console.log(result)
}

solution(input)
