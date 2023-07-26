const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

const recursive = (max5, data) => {
  if(max5 === -1) return -1
  
  const sum = Number(data)
  const surplus = sum - (max5 * 5)
  
  if(surplus % 3 === 0) return max5 + surplus/3
  else return recursive(max5 - 1, sum)
}

function solution(data) {
  const max5 = Math.floor(data/5)
  console.log(recursive(max5, data))
}

solution(input)