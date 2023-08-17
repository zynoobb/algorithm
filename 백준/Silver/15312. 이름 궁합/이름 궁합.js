const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const ALP = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]
  const table = {}
  ALP.forEach((el,idx)=> table[String.fromCharCode(65 + idx)] = el)
  const initNames = []
  for(let i = 0 ; i < data[0].length ; i ++)
    initNames.push(table[data[0][i]],table[data[1][i]])
  
  const arr = [initNames]
  for(let i = 0 ; i < initNames.length -2 ; i++) {
    let temp = []
    for(let j = 1 ; j < arr[i].length ; j++) {
      const last = Number(String(arr[i][j-1] + arr[i][j]).at(-1))
      temp.push(last)
    }
    arr.push(temp)
  }
  
  console.log(arr.at(-1).join(''))
}
  
solution(input)