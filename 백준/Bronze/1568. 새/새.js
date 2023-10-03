const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let [birds, result, i] = [+data, 0, 1]

  while(birds) {
    const temp = birds - i
  
    if(0 > temp) i = 0
    else {
      birds = temp
      result ++
    }
    i ++
  }

  console.log(result)
}

solution(input)  
