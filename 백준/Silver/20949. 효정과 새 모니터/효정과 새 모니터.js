const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const act = (w,h) => {
  return Math.sqrt(Math.pow(w,2) + Math.pow(h,2))/77
}
function solution(data) {
  const arr = data.map((el,idx)=> {
    const [x,y] = el.split(" ").map(Number)
    return [idx+1, act(x,y)]
  })

  const result = arr.sort((a,b)=> b[1]-a[1]).map(el=>el[0])
  console.log(result.join('\n'))
}
  
solution(input)