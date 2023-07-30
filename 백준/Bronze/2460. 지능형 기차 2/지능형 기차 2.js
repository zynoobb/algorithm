const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let max = 0

  data.reduce((acc, cur)=> {
    const [off, on] = cur.split(" ")
    const passenger = acc - Number(off) + Number(on)
    if(passenger > max) max = passenger
    return passenger
  },0)

  console.log(max)
}
solution(input)
