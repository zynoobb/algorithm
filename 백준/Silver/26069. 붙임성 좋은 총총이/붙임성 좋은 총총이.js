const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()
function solution(data) {
  const table = {}
  let arr 
  for(let i = 0 ; i < N ; i ++) {
    if(data[i].includes('ChongChong')) {
      data[i].split(' ').forEach(el=> table[el] = true)
      arr = data.slice(i)
      break
    }
  }

  arr.forEach((el)=> {
    const [a,b] = el.split(' ')
    if(table[a] || table[b]) {
      table[a] ? table[b] = true : table[a] = true
    }
  })

  console.log(Object.values(table).length)
}

solution(input)