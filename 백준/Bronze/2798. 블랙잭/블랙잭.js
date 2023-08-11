const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [n,m]= input.shift().split(" ")

function solution(data) {
  const cards = data[0].split(" ").map(Number)
  let result = []

  for(let i = 0 ; i < n ; i ++) {
    for(let j = i + 1 ; j < n ; j ++) {
      for(let k = j + 1 ; k < n ; k ++) {
        const sum = cards[i] + cards[j] + cards[k]
        if(sum <= m) result.push(sum)
      }
    }
  }

  console.log(Math.max(...result))
}

solution(input)
 