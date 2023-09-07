const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const funTable = {
  '1' : (arr) => arr,
  '2' : (arr) => {
    return arr.map(el => el.split('').reverse())
      .map(x => x.join(''))
  },
  '3' : (arr) => arr.reverse()
}


function solution(data) {
  const [_, ...arr] = data
  const state = arr.pop()
  console.log(funTable[state](arr).join('\n'))
}

solution(input)
