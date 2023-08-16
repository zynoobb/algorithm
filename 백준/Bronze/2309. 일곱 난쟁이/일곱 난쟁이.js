const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n").map(Number)

function solution(data) {
  const total = data.reduce((a,c)=> a + c)
  let except
  for(let i = 0 ; i < data.length ; i ++) {
    for(let j = i+1 ; j < data.length ; j ++) {
      if(total - data[i] - data[j] === 100) {
        except = [i,j]
        break
      }
    }
  }
  
  const result = data.filter((_,idx)=> !except.includes(idx)).sort((a,b)=> a-b)
  console.log(result.join("\n"))
}
  
solution(input)