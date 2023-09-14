const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (dif, n) => {
  let x = dif >= n ? dif : n
  let y = dif < n ? dif : n

  while (y !== 0) {
    let temp = x % y
    x = y
    y = temp
  }

  return `${dif/x}/${n/x}`
}

function solution(data) {
  const [_, arr] = data.map(el => el.split(' ').map(Number))
  const dif = arr.shift()
  const result = arr.map(el => act(dif, el))
  console.log(result.join('\n'))
}

solution(input)

