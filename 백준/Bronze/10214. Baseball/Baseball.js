const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const verify = (arr) => {
  const scores = arr.map(el=> el.split(" ").map(Number))
  let winner = scores.reduce((acc,cur)=> {
    const [y, k] = cur
    return acc + y - k
  },0)
  return winner > 0 ? "Yonsei" : winner < 0 ? "Korea" : "Draw"
}

function solution(data) {
  const result = []
  data.forEach((_,idx)=> {
    if(idx % 9 === 0) {
      const game = data.slice(idx, idx + 9)
      result.push(verify(game))
    }
  })
  console.log(result.join("\n"))
}

solution(input)
