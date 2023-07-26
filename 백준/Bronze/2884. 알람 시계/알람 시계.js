const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  const [hours, minutes] = data.split(" ").map((el)=> Number(el))
  const reserve = (hours * 60 + minutes) - 45
  let result = reserve < 0 ? reserve + 1440 : reserve

  console.log(`${Math.floor(result/60)} ${result%60}`)
}

solution(input)