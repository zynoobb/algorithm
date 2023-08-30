const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [find, _, ...str] = data
  
  const result = str.map((el)=> {
    const temp = el.repeat(2)
    return temp.includes(find)
  }).filter((v)=> v)

  console.log(result.length)
}

solution(input)
