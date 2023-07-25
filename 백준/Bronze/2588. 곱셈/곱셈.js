const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(data) {
  const [a,b] = data.map((el)=> el.split(""))
  const reverseB = [...b].reverse()
  
  reverseB.forEach((el)=> {
    console.log(el * a.join(""))
  })

  console.log(a.join("") * b.join(""))
}

solution(input)