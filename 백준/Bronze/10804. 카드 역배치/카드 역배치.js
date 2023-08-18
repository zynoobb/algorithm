const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const arr = Array.from({length : 20}, (_,idx)=> idx + 1)
  
  data.forEach((el)=> {
    const [start, end] = el.split(" ").map(Number)
    const temp = arr.slice(start-1, end).reverse()
    let j = 0
    for(let i = start-1 ; i < end ; i++) {
      arr[i] = temp[j++]
    }
  })
  console.log(arr.join(" "))
}
solution(input)

