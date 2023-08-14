const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const act = ([H,_,N]) => {
  let floor
  let num
  if(N%H !== 0) {
    floor =  N%H
    num = Math.floor(N/H) + 1
  } else {
    floor = H
    num = N/H
  }
  
  return num < 10 ? floor + "0" + num : floor + String(num)
}

function solution(data) {
  const arr = data.map(el=>el.split(" ").map(Number))
  let result = []
  arr.forEach((el)=> result.push(act(el)))
  console.log(result.join("\n"))
}
  
solution(input)
