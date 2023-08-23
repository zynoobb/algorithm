const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let arr = data.split('').reverse().map(Number)
  
  for(let i = 0 ; i < arr.length - 1 ; i++) {
    if(arr[i] < 5) arr[i] = 0
    else if(arr[i] <= 10) {
      arr[i] = 0
      arr[i+1] += 1
    }
  }

  const result = arr.reverse().join('')
  console.log(result)
}

solution(input)