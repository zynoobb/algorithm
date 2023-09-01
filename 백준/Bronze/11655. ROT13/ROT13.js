const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString()

const transform = (s) => {
  const char = s.charCodeAt()
  const ROT13 = char + 13
  if(65 <= char && char <= 90) {
    return ROT13 <= 90 ? String.fromCharCode(ROT13) :  String.fromCharCode(ROT13 - 26)
  } else if(97 <= char && char <= 122) {
    return ROT13 <= 122 ? String.fromCharCode(ROT13) :  String.fromCharCode(ROT13 - 26)
  } else return String.fromCharCode(char)
}

function solution(data) {
  const result = data.split('').map(el=> transform(el)).join('')
  console.log(result)
}

solution(input)