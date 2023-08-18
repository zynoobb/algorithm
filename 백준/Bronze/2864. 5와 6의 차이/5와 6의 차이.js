const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split(" ")

function solution(data) {
  const act = arr => {
    return arr.reduce((ac,cur)=> ac + cur)
  }
  const min = data.map((el)=> Number(el.replaceAll("6", "5")))
  const max = data.map((el)=> Number(el.replaceAll("5", "6")))
  
  const result = [act(min), act(max)]
  console.log(result.join(" "))
}
  
solution(input)

