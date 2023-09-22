const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[n,_], ...arr] = data.map(el=> el.split(' ').map(Number))

  const baskets = Array.from({length : n + 1}, ()=> 0)
  
  arr.forEach(el=> {
    const [a,b,n] = el
    for(let i = a ; i <= b ; i ++) {
      baskets[i] = n
    }
  })

  console.log(baskets.slice(1).join(' '))  
}

solution(input)
