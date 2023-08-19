const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n').map(el=>el.split(" ").map(Number))

const [N,M] = input.shift()

const act = (DP, arr) => {
  const [i,j,x,y] = arr
  const allRange = DP[x][y]
  const leftExcept = DP[i-1][y]
  const upExcept = DP[x][j-1]
  const duplicate = DP[i-1][j-1]
  return allRange - leftExcept - upExcept + duplicate
}

function solution(data) {
  const matrix = data.slice(0, N)
  const testCase = data.slice(N+1)
  const DP = Array.from({length : N+1}, ()=> {
    return Array.from({length : M+1}, ()=> 0)
  })

  for(let i = 1 ; i <= N ; i++) {
    for(let j = 1 ; j <= M ; j++) {
      DP[i][j] = matrix[i-1][j-1] + DP[i-1][j] + DP[i][j-1] - DP[i-1][j-1]
    }
  }

  const result = []
  testCase.forEach((arr)=> result.push(act(DP, arr)))
  console.log(result.join('\n'))
}
solution(input)
