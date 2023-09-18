const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [present, start] = data.map(el => {
    const [a,b,c] = el.split(':').map(Number)
    return a * 3600 + b * 60 + c
  })


  let rest = start > present ? start - present : start + (24 * 3600 - present)
  
  const times = [3600, 60, 1]
  const storage = Array.from({length : 3}, ()=> 0)

  times.forEach((el, idx)=> {
    storage[idx] = Math.floor(rest / el)
    rest %= el
  })

  const result = storage.map(el => String(el).padStart(2,'0')).join(':')

  console.log(result)
}

solution(input)
