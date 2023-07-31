const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.pop()

function solution(data) {
  let result = []
  
  data.forEach((el)=> {
    let temp = 0
    const [d,m,y] = el.split(" ").map((el)=>Number(el))
    for(let i = 1 ; i <= m ; i++) {
      if(i !== m) temp += new Date(y,i,0).getDate()
      else temp += d
    }
    result.push(temp)
  })
  console.log(result.join('\n'))
}
solution(input)
