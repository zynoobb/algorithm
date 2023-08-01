const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n").map((x)=> x.split(" "))

const [_, limit] = input.shift().map(el=> +el)

function solution(data) {
  let table = Array.from({length : limit + 1}, ()=> 0)

  data.forEach((el)=> {
    const [w,v] = el.map(el=> +el)
    for(let i = limit ; i > w - 1 ; i--) 
      table[i] = Math.max(table[i], table[i-w] + v)
  })

  console.log(table.at(-1))
}
solution(input)
