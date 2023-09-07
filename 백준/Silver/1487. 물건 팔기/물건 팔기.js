const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  let [_, ...arr] = data.map(el=> el.split(' ').map(Number))
  arr = arr.sort((a,b)=> a[0] - b[0])
  const prices = arr.map(el => el[0])
  
  const profits = prices.map((price)=> {
    return arr.reduce((acc,cur)=> {
      const [hope, delivery] = cur
      return acc + 
        ( price > hope ? 0 
        : price - delivery < 0 ? 0 
        : price - delivery)
    }, 0)
  })
  const max = Math.max(...profits)
  console.log(max !== 0 ? arr[profits.indexOf(max)][0] : 0)
}

solution(input)
