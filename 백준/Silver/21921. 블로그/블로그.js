const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [_, range] = input.shift().split(" ")

function solution(data) {
  const arr = data[0].split(" ").map((el)=> +el)
  let init = 0
  for(let i = 0 ; i < range ; i++) init += arr[i]

  let max = init
  let result = 1
  
  for(let i = range ; i < arr.length ; i ++) {
    let sum = init - arr[i-range] + arr[i]
    init = sum
    if(init > max) {
      max = init
      result = 1
    } else if(init === max) result ++
  }
  
  console.log(max === 0 ? "SAD" : [max, result].join("\n"))
}

solution(input)
 