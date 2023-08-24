const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const table = {}

  for(let i = 0 ; i < 26 ; i ++) {
    const alp = String.fromCharCode(65+i) 
    table[alp] = [data.indexOf(alp), data.lastIndexOf(alp)]
  }

  let result = 0
  for(let alp in table){
    const [front1,back1] = table[alp]
    for(let compare in table) {
      const [front2, back2] = table[compare]
      if(front1 < front2 && back1 < back2 && front2 < back1) {
        result ++
      }
    }
  }
  console.log(result)
}

solution(input)