const fs = require('fs')
// const input = fs.readFileSync('입력/7785.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

function solution(data) {
  let obj = {}
  
  data.forEach((el)=> {
    const [name, action] = el.split(" ")
    if(action === "enter") obj[name] = true
    else obj[name] = false
  })

  const filtered = Object.entries(obj).filter((el)=> el[1])
  const result = filtered.map((el)=> el[0]).sort().reverse()

  console.log(result.join("\n"))
}

solution(input)