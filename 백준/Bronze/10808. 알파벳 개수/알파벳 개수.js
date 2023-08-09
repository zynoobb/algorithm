const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("")

function solution(data) {
  let result = Array.from({length : 26}, ()=> 0)
  data.forEach((el)=> result[el.charCodeAt()-97] ++)
  console.log(result.join(" "))
}

solution(input)
 