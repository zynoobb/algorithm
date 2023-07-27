const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

function solution(data) {
  if(data.length === 1) {
    console.log(data[0])
    return
  }

  let [result, ...rest] = data
  result = [...result]

  rest.forEach((el)=> {
    [...el].forEach((s, i)=> {
      if(s !== result[i]) result[i] = "?"
    })
  })
  console.log(result.join(""))
}

solution(input)
