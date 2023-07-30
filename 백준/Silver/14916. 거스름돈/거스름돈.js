const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const sum = data[0]
  let max5 = Math.floor(sum/5)

  while (true) {
    let rest = sum - (max5 * 5)
    if(rest % 2 === 0) {
      console.log(max5 + rest/2)
      return
    } 

    if(max5 !== 0) max5 --
    else {
      console.log(-1)
      return
    }
  }
}
solution(input)
