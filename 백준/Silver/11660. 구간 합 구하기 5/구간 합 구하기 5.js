const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const [N,M] = input.shift().split(" ").map(Number)

// 3 4
const act = (DP,i,j,y,x) => {
  const allRange = DP[y][x]
  const leftExcept = DP[i-1][x]
  const upExcept = DP[y][j-1]
  const duplicate = DP[i-1][j-1]
  return allRange - leftExcept - upExcept + duplicate
}

function solution(data) {
  const matrix = data.map((el)=> el.split(" ").map(Number))
  const testCase = matrix.splice(N,N+M)

  const DP = Array.from({length : N+1}, ()=> {
    return Array.from({length : N+1}, ()=> 0)
  })

  for(let i = 1 ; i <= N ; i ++) {
    for(let j = 1 ; j <= N ; j ++) {
      DP[i][j] = matrix[i-1][j-1] + DP[i-1][j] + DP[i][j-1] - DP[i-1][j-1]
    }
  }

  const result = []
  testCase.forEach((el)=> {
    const [i,j,y,x] = el
    result.push(act(DP,i,j,y,x))
  })

  console.log(result.join('\n'))
}
solution(input)
