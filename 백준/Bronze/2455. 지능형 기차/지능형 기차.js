const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let max = 0
  const arr = data.map((el)=> {
    const [a,b] = el.split(" ")
    return [Number(a),Number(b)]
  })
  
  arr.reduce((passenger, platform, idx)=> {
    const [off, on] = platform
    const present = passenger + on - off
    if(present > max) max = present
    return present
  }, 0)

  console.log(max)
}

solution(input)
