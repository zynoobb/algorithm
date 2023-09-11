const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [arr, [score]] = data.map(el=> el.split(' ').map(Number))
  
  const cutLine = []
  const grades = ['A+','A0','B+','B0','C+','C0','F']
  const cutIdx = [5,15,30,35,45,48,50]
  arr.forEach((el,idx)=> {
    if(cutIdx.includes(idx + 1)) cutLine.push(el)
  })
  
  for(let i = 0 ; i < cutLine.length ; i++) {
    if(score >= cutLine[i]) {
      console.log(grades[i])
      return
    }
  }
}

solution(input)