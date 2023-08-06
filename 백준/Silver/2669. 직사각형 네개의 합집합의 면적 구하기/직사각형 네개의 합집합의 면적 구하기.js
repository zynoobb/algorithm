const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")



function solution(data) {
  let set = new Set()

  const act = ([x1,y1,x2,y2]) => {
    for(let x = x1 ; x < x2 ; x++) {
      for(let y = y1 ; y < y2 ; y++) {
        set.add(`${x}:${y}`)
      }
    }
  }

  data.forEach((el)=> {
    const arr = el.split(' ').map((el)=> +el)
    act(arr)
  })
  
  console.log(set.size)
}

solution(input)
 