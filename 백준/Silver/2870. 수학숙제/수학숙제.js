const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const findNumbers = (str) => {
  let storage = []
  let temp = ''
  for(let i = 0 ; i < str.length ; i ++) {
    if(!isNaN(str[i])) {
      temp += str[i]
    } else if(temp) {
      storage.push(BigInt(temp))
      temp = ''  
    }
    if(i === str.length - 1 && temp) storage.push(BigInt(temp))
  }
  return storage
}

function solution(data) {
  data.shift()

  let numbers = []
  data.forEach(el=> numbers = [...numbers, ...findNumbers(el)])

  const sorted = numbers.sort((a,b)=> String(a)-String(b))
  console.log(sorted.join('\n'))
}

solution(input)  
