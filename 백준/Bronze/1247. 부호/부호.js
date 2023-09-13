const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (units) => {
  const sum = units.reduce((acc,cur)=> BigInt(acc) + BigInt(cur), 0)
  return String(sum) > 0 ? '+' : String(sum) < 0 ? '-' : '0'
}

function solution(data) {
  const result = []
  for(let i = 0 ; i < data.length ; i ++)   {
    const n = Number(data[i])
    result.push(act(data.slice(i+1, n+i+1)))
    i += n
  }

  console.log(result.join('\n'))
}

solution(input)
