const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const lengs = input.shift().split(' ').map(Number)
function solution(data) {
  const min = Math.min(...lengs)

  const sorted = data.map((el)=> el.split(' ').sort((a,b)=> b-a).map(Number))
    
  let temp = 0
  let rest = 0
  sorted.forEach((arr)=> {
    for(let i = 0 ; i < min ; i ++) {
      temp += arr[i]
      if(i === min - 1) rest += arr.slice(i+1).reduce((acc,cur)=> acc+cur,0)
    }
  })

  let before = temp + rest
  let after = temp * 0.9 + rest

  console.log([before,after].join('\n'))
  
}

solution(input)