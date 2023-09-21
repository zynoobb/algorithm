const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const mathTable = [
    ((a,b,c)=> a + b === c ? `${a}+${b}=${c}` : false),
    ((a,b,c)=> a === b + c ? `${a}=${b}+${c}` : false),
    ((a,b,c)=> a - b === c ? `${a}-${b}=${c}` : false),
    ((a,b,c)=> a === b - c ? `${a}=${b}-${c}` : false),
    ((a,b,c)=> a * b === c ? `${a}*${b}=${c}` : false),
    ((a,b,c)=> a === b * c ? `${a}=${b}*${c}` : false),
    ((a,b,c)=> a / b === c ? `${a}/${b}=${c}` : false),
    ((a,b,c)=> a === b / c ? `${a}=${b}/${c}` : false),
  ]

  for(let i = 0 ; i < mathTable.length ; i++) {
    const [x,y,z] = data.split(' ').map(Number)
    
    if(mathTable[i](x,y,z)) {
      console.log(mathTable[i](x,y,z))
      return
    }
  }
}

solution(input)
