const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let [a,b] = data.split(' ')
  const leng = a.length
  let max = 0
  while(a.length <= b.length) {
    let temp = 0
    for(let i = 0 ; i < a.length ; i ++) {
      if(a[i] === b[i]) temp ++
    }
    a = ' ' + a
    max = temp > max ? temp : max
    if(max === leng) break
  }
  
  console.log(leng - max)
}

solution(input)  
