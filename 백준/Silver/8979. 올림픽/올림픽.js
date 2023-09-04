const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  let [[_,K], ...temp] = data.map(el=> el.split(' '))
  temp = temp.sort((a,b)=> a[0] - b[0])
  const targetKey = [...temp[K-1]].slice(1).join('/')

  const table = {}
  
  temp.sort((a,b)=> {
    if(a[1] !== b[1]) return b[1] - a[1]
    else if(a[2] !== b[2]) return b[2] - a[2]
    else return b[3] - a[3]
  }).forEach((el, idx)=> {
    const key = el.slice(1).join('/')
    if(!table[key]) table[key] = idx + 1
  })

  console.log(table[targetKey])
} 

solution(input)