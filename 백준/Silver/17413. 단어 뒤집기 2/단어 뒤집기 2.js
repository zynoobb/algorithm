const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let storage = []

  let stack = ""
  for(let i = 0 ; i < data.length ; i ++) {
    if(data[i] === "<") {
      if(stack.length) storage.push(stack)
      stack = "<"
    } else if (data[i] === ">") {
      stack += ">"
      storage.push(stack)
      stack = ""
    } else if (data[i] === " ") {
      if(stack.includes("<")) stack += " "
      else {
        storage.push(" " + stack)
        stack = ""
      }
    } else {
      stack += data[i]
    }

    if(i === data.length - 1) storage.push(stack)
  }

  let result = []

  storage.forEach((el)=> {
    if(el.includes("<")) result.push(el)
    else {
      const reverse = el.split("").reverse().join("")
      result.push(reverse)
    }
  })
  console.log(result.join(""))
}

solution(input)
