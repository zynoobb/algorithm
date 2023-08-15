const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()


function solution(data) {
  let n = Number(data)
  const times = [300, 60, 10]
  let result = Array.from({length : 3})
  
  times.forEach((time, idx)=> {
    result[idx] = Math.floor(n / time)
    n = n % time
  })


  console.log(n === 0 ? result.join(" ") : "-1")
}
  
solution(input)
