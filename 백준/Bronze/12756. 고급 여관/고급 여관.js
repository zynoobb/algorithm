const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[aAttack, aHealth],[bAttack,bHealth]] = data.map(el=>el.split(" ").map(Number))
  const aWithstand = Math.ceil(aHealth/bAttack)
  const bWithstand = Math.ceil(bHealth/aAttack)

  console.log(aWithstand > bWithstand ? "PLAYER A" : bWithstand > aWithstand ? "PLAYER B" : "DRAW")
}

solution(input)
