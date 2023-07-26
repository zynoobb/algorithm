const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const leng = "z".charCodeAt()- "a".charCodeAt() + 1
  let result = Array.from({length : leng})

  for(let i = 0 ; i < leng ; i++) {
    const findCharCode = String.fromCharCode(i + 97)
    result[i] = data.indexOf(findCharCode)
  }
  console.log(result.join(" "))
}

solution(input)