const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const calc = (a,b) => {
  const [charA, charB] = [a,b].map((el)=> el.charCodeAt())
  return charA <= charB ? charB - charA : 26 + (charB - charA)
}

const act = (el) => {
  const [str1, str2] = el.split(' ').map(v => v.split(''))
  const difs = str1.map((el, idx) => {
    return calc(el, str2[idx])
  })

  return `Distances: ${difs.join(' ')}`
}

function solution(data) {
  data.shift()
  const result = data.map(el => act(el))

  console.log(result.join('\n'))
}

solution(input)  
