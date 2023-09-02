const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.shift()
function solution(data) {
  const init = data[0].split(' ').map(Number)
  let [maxX,maxY] = init
  let [minX,minY] = init
  
  data.forEach((el)=> {
    const [x,y] = el.split(' ').map(Number)
    if(x > maxX) maxX = x
    else if(x < minX) minX = x

    if(y > maxY) maxY = y
    else if(y < minY) minY = y
  })

  console.log((maxX - minX) * (maxY - minY))
}

solution(input)

