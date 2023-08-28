const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const table = {}

  for(let i = 1 ; i <= 26 ; i ++) { 
    table[String.fromCharCode(i + 96)] = i
    table[String.fromCharCode(i + 64)] = i + 26
  }

  const sum = data.split('').map((el)=> table[el]).reduce((acc,cur)=> acc + cur,0)
  
  for(let i = 2 ; i <= Math.sqrt(sum) ; i ++) {
    if(sum % i === 0) {
      console.log("It is not a prime word.")
      return
    }
  }

  console.log("It is a prime word.")
}

solution(input)
