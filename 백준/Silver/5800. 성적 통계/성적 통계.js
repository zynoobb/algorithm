const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

input.shift()

function solution(data) {
  let result = []

  data.forEach((el, idx)=> {
    const arr = el.split(" ")
    arr.shift()
    result.push(`Class ${idx + 1}`)
    const sorted = arr.sort((a,b)=> a-b)
    const gap = sorted.map((el, idx)=> {
      if(idx !== sorted.length - 1) {
        return el = sorted[idx + 1] - el
      } else return 0
    })
    const max = sorted.at(-1)
    const min = sorted[0]
    const largestGap = Math.max(...gap)
    
    result.push(`Max ${max}, Min ${min}, Largest gap ${largestGap}`)
  })

  console.log(result.join("\n"))
}

solution(input)
 