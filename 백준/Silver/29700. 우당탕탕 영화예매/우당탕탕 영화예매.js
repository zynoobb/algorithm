const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const N = data.shift().split(' ').map(Number)[2]
  
  let result = 0

  const chairs = '0'.repeat(N)

  data.forEach((str)=> {
    for(let j = 0 ; j <= str.length - N ; j ++) {
      if(str.substr(j, N) === chairs) result ++
    }
  })

  console.log(result)
}

solution(input)
