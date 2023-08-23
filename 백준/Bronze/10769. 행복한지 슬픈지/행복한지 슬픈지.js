const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let happy = 0
  let sad = 0

  for(let i = 0 ; i < data.length -2 ; i ++) {
    if(data[i] !== ":") continue
    const str = data[i] + data[i+1] + data[i+2]
    
    if(str === ":-)") happy ++
    else if(str === ":-(") sad ++
  }

  console.log(happy + sad === 0 ? "none" : happy === sad ? "unsure" : happy > sad ? "happy" : "sad")
}

solution(input)