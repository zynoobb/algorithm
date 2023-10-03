const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const [str1, str2] = str.split(' ').map(s => s.split('').sort().join(''))
  return str1 === str2 ? 'Possible' : 'Impossible'
}

function solution(data) {
  data.shift()  
  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)  
