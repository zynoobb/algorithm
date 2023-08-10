const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

function solution(data) {
  const arr = data.map((el)=> el.split(" ").sort((a,b)=> a-b))

  let result = []

  arr.forEach((el)=> {
    if(el[3]-el[1] >= 4) result.push("KIN")
    else result.push(Number(el[1])+Number(el[2])+Number(el[3]))
  })
  console.log(result.join('\n'))
}

solution(input)
 