const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [start, end] = data.map(el => {
    const [h,m,s] = el.split(':').map(Number)
    return h * 3600 + m * 60 + s
  })
  
  let dif = end - start > 0 
    ? end - start 
    : 86400 + end - start

  const storage = []
  
  let i = 0
  const times = [3600, 60, 1]
  while(i <= 2) {
    storage.push(Math.floor(dif / times[i]))
    dif %= times[i++]
  }

  const result = storage.map(el => String(el).padStart(2, '0')).join(':')
  console.log(result)
}

solution(input) 