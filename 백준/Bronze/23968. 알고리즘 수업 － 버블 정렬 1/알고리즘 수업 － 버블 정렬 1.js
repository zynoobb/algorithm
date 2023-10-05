const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N,K], arr] = data.map(el => el.split(' ').map(Number))
  let count = 0
  let result = null

  for(let i = 0 ; i < N ; i ++) {
    for(let j = 0 ; j < N ; j ++) {
      if(arr[j] > arr[j+1]) {
        count ++
        if(count === K) {
          result = `${arr[j+1]} ${arr[j]}`
        }
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }

  console.log(result ? result : -1)
}

solution(input)  
