const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let arr = data.split('').reverse()
  let scores = [1,2,4]
  let result = Array.from({length : Math.ceil(arr.length / 3)}, ()=> 0)
  for(let i = 0 ; i < arr.length ; i ++) {
    result[~~(i/3)] += arr[i] * scores[i%3]
  }

  console.log(result.reverse().join(''))
}

solution(input)  
