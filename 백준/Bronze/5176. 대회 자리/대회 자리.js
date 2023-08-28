const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()

function solution(data) {
  const testCase = []
  
  data.forEach((el, idx)=> {
    const [a,b] = el.split(' ').map(Number)
    if(b) testCase.push(data.slice(idx + 1, idx + a + 1))
  })

  const result = testCase.map((el)=> act(el))
  console.log(result.join("\n"))
}

function act (arr) {
  const table = {}
  let except = 0
  arr.forEach((el)=> {
    if(!table[el]) table[el] = true
    else except ++
  })

  return except
}

solution(input)
