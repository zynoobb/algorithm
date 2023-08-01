const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const [a,b] = data
  let result = ""
  a.split("").forEach((el, idx)=> result += el + b[idx])
  
  const act = (x,y) => (Number(x) + Number(y)).toString().at(-1)
    
  while (true) {
    if(result.length === 2) break
    let temp = ""

    for(let i = 0 ; i < result.length -1 ; i ++) {
      temp += act(result[i], result[i + 1])
    }
    result = temp
  }
  console.log(result)
}
solution(input)
