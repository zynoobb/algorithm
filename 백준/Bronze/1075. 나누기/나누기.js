const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [N,F] = data
  
  let num = ""
  for(let i = 0 ; i < N.length ; i ++) 
    i < N.length - 2 ? num += N[i] : num += "0"
  

  for(let i = 0 ; i <= 99 ; i ++) {
    const test = + num + i
    if(test%F === 0) {
      console.log(i < 10 ? "0" + i : i)
      return
    }
  }
}

solution(input)