const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const table = {}

  for(let i = 0 ; i < 26 ; i ++) {
    const alp = String.fromCharCode(i + 65)
    table[alp] = String.fromCharCode(i + 62 >= 65 ? i + 62 : i + 88)
  }

  let result = ""
  for(let i = 0 ; i < data.length ; i++)
    result += table[data[i]]
  
  console.log(result)

}
solution(input)

