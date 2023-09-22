const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const actDecrypt = (arr) => {
  const [key1, key2, txt] = arr.map(el => el.split(' '))
  const decrypt = key1.map(el=> key2.indexOf(el))
  const table = {}
  txt.forEach((el,idx)=> table[idx] = el)
  return decrypt.map((el)=> table[el])
}

function solution(data) {
  data.shift()

  const testCase = []

  data.forEach((el,idx)=> {
    if(!isNaN(el)) testCase.push(data.slice(idx + 1, idx + 4))
  })
  
  const result = testCase.map(el=> actDecrypt(el))
  console.log(result.map(el=> el.join(' ')).join('\n'))
}

solution(input)
