const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  let result = []

  data.forEach((el)=> {
    const arr = el.split(" ")
    let temp = 0
    arr.forEach((x)=> {
      if(!isNaN(x)) temp += x
      else if(x==="@") temp *= 3
      else if(x==="%") temp += 5
      else if(x==="#") temp -= 7
    })
    result.push(temp.toFixed(2))
  })

  console.log(result.join('\n'))
}

solution(input)
 