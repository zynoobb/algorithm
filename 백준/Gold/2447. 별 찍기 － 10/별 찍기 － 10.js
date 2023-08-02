const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()


function solution(data) {
  let result = []
  let str = ""
  const recursive = (i,j) => {
    if(i%3===1 && j%3===1) str += " "
    else if(Math.floor(i/3)===0 && Math.floor(j/3)===0) str += "*"
    else recursive(Math.floor(i/3), Math.floor(j/3))
  }

  for(let i = 0 ; i < data ; i ++) {
    for(let j = 0 ; j < data ; j ++) {
      recursive(i,j)
    }
    result.push(str)
    str = ""
  }

  console.log(result.join("\n"))
}

solution(input)

