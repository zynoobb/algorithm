const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

function solution(data) {
  const set = new Set([...data[0].split(" "), ...data[1].split(" ")])
  const arr = [...set].sort((a,b)=> a.localeCompare(b))
  const result = []

  arr.forEach((body)=> {
    for(let i = 0 ; i < arr.length ; i++) {
      result.push(body + " " + arr[i])
    }
  })

  console.log(result.join("\n"))
}
  
solution(input)