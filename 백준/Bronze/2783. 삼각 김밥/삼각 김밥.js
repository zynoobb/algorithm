const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [seven24, _, ...arr] = data.map(el=>el.split(' ').map(Number))
  const result = [seven24, ...arr].map(el => {
    const [price,grams] = el
    return price/grams*1000
  })

  console.log(Math.min(...result)) 
}

solution(input)