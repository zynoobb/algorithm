const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.shift()
  const table = {}
  data.forEach(el => table[el] = true)

  let max = 0
  data.forEach((el)=> {
    let cnt = 0
    for(let j = 1 ; j < 5 ; j ++) {
      table[+el + j] && cnt ++
    }
    max = cnt > max ? cnt : max
  })

  console.log(4-max)
}

solution(input)  

