const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
  
  croatia.forEach((el)=> {
    data = data.replaceAll(el,'*')
  })

  console.log(data.length)
}

solution(input)
