const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const length = data.length
  const sum = data.reduce((acc,cur)=> acc+Number(cur),0)/length
  
  const modeTable = {}
  data.forEach((el)=> modeTable[el] = (modeTable[el]||0)+1)

  const mode = Object.entries(modeTable).sort((a,b)=> b[1]-a[1])[0][0]
  
  console.log([sum,mode].join('\n'))
}

solution(input)
 