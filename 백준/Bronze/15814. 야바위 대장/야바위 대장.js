const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  let arr = data.shift().split('')
  const [n, ...cmd] = data.map(el=>el.split(' ').map(Number))
  
  cmd.forEach(([a,b])=> {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  })

  console.log(arr.join(''))
}

solution(input)