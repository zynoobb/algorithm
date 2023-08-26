const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

const gcd = (a,b) => {
  return b === 0 ? a : gcd(b, a%b)
}

const act = (arr) => {
  const storage = []
  for(let i = 0 ; i < arr.length ; i ++) {
    for(let j = i + 1 ; j < arr.length ; j ++) {
      storage.push(gcd(arr[i], arr[j]))
    }
  }

  return storage.reduce((acc,cur)=> acc + cur)
}

function solution(data) {
  testCase = []

  data.forEach((el)=> testCase.push(el.split(' ').map(Number)))
  const result = testCase.map((el)=> act(el.slice(1)))
  
  console.log(result.join('\n'))
}

solution(input)