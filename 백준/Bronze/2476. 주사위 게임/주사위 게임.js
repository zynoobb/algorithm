const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

const act = (arr) => {
  const set = new Set(arr)
  if(set.size === 1) return 10000 + arr[0]*1000
  else if(set.size === 3) return Math.max(...arr) * 100
  else {
    const [a,b,c] = arr
    return a === b ? 1000 + a*100 : a === c ? 1000 + a*100 : 1000 +b*100
  }
}

function solution(data) {
  const arr = data.map((el)=> {
    const [a,b,c] = el.split(" ")
    return [a,b,c]
  })
  let max = 0

  arr.forEach((el)=>{
    const temp = act(el)
    if(temp > max) max = temp
  })

  console.log(max)
}
solution(input)
