const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const scores = {
    "0" : "E",
    "1" : "A",
    "2" : "B",
    "3" : "C",
    "4" : "D"
  }

  const arr = data.map((el)=> el.split(" "))
  let result = []
  arr.forEach(el=> result.push(scores[el.filter(x=>x==="0").length]))
  console.log(result.join("\n"))
}

solution(input)
