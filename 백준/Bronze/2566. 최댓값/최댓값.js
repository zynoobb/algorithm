const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const arr = data.map((el)=> el.split(" ").map((n)=> +n))
  let result = 0
  let location = [0,0]
  arr.forEach((unit,i)=> {
    unit.forEach((el,j)=> {
      if(result <= el) {
        result = el
        location = [i+1, j+1]
      }
    })
  })

  console.log([result,location.join(" ")].join("\n"))
}
solution(input)
