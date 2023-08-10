const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

const act = ([x,y]) => {
  let same = 0
  x.split("").forEach((el,idx)=> {
    if(el !== y[idx]) same ++
  })
  return `Hamming distance is ${same}.`
}

function solution(data) {
  let arr = data.map((el,idx)=> {
    if(idx%2===0) return [el, data[idx+1]]
    else return false
  }).filter((v)=> v)

  let result = []
  arr.forEach((el)=> result.push(act(el)))

  console.log(result.join("\n"))
}

solution(input)
 