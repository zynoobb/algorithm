const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  let result = ""

  const colorTable = {}
  const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  colors.forEach((color, idx)=> {
    colorTable[color] = [String(idx), Math.pow(10,idx)]
  })
  
  for(let i = 0 ; i < data.length ; i++) {
    if(i !== data.length - 1) result += colorTable[data[i]][0]
    else result *= colorTable[data[i]][1]
  }

  console.log(result)
}

solution(input)
