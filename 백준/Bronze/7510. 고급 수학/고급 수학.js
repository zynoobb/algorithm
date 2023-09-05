const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const [a,b,c] = str.split(' ').sort((a,b)=> a-b).map(Number)
  return a ** 2 + b ** 2 === c ** 2 ? 'yes' : 'no'
}

function solution(data) {
  data.shift()

  let result = []
  data.forEach((el,idx)=> {
    const temp = [`Scenario #${idx + 1}:`, undefined, '']
    temp[1] = act(el)
    result = [...result, ...temp]
  })

  result.pop()
  console.log(result.join('\n'))
} 

solution(input)
