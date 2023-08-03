const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  let result = []

  data.forEach((el)=> {
    const [target, text] = el.split(" ")
    let temp = ""
    for(let i = 0 ; i < text.length ; i++) {
      if(i !== target-1) temp += text[i]
    }
    result.push(temp)
  })
  console.log(result.join('\n'))
}

solution(input)
 