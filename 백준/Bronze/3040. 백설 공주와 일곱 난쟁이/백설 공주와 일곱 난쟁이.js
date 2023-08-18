const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n").map(Number)

function solution(data) {
  const sum = data.reduce((ac,cur)=> ac + cur)
  let exceptIndex

  for(let i = 0 ; i < data.length ; i ++) {
    for(let j = i + 1 ; j < data.length ; j ++) {
      const except = data[i] + data[j]
      if(sum - except === 100) exceptIndex = [i, j]
    }
  }
  
  const result = data.filter((_,index) => !exceptIndex.includes(index))
  console.log(result.join('\n'))
}
  
solution(input)

