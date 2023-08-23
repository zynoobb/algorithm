const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()
function solution(data) {
  const table = {}

  data.forEach((el)=> {
    const [cow, move] = el.split(" ").map(Number)
    if(!table[cow]) table[cow] = [move]
    else if(table[cow].at(-1) !== move) table[cow].push(move)
  })

  const result = Object.entries(table).map(el => el[1].length - 1)
  console.log(result.reduce((acc,cur)=> acc + cur))
}

solution(input)