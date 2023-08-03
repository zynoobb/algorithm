const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let temp = []

  for(let i = 0 ; i < data.length ; i ++) 
    temp.push(data.slice(i))
  
  const result = temp.sort((a,b)=> a.localeCompare(b))
  console.log(result.join('\n'))
}

solution(input)
 