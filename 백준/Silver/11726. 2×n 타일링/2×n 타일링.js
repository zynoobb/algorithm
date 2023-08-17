const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const result = [null,1,2, ...Array.from({length : data > 2 ? data - 2 : 0})]
  
  for(let i = 3 ; i <= data ; i++) {
    result[i] = (result[i-2] + result[i-1])%10007
  }

  console.log(result[data])
}
  
solution(input)

// 1 1
// 2 2
// 3 3
// 4 5
// 5 8
