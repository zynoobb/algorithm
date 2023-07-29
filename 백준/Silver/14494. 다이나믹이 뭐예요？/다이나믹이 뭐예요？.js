const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const [n,m] = data[0].split(" ")
  
  let arr = Array.from({length : m}, ()=> {
    return Array.from({length : n}, ()=> 1)
  })

  for(let i = 1 ; i < m ; i ++) {
    for(let j = 1 ; j < n ; j ++) {
      const sum = (arr[i-1][j-1] + arr[i-1][j] + arr[i][j-1])%1000000007
      arr[i][j] = sum
    }
  }
  
  const result = arr[m-1][n-1]
  console.log(result)
}
solution(input)
