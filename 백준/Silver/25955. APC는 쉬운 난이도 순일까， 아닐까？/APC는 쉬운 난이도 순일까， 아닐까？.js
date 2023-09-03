const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

function solution(data) {
  const str = data[0].split(' ').map((el)=> {
    return [el.slice(0,1), +el.slice(1)]
  })
  const rank = ['B','S','G','P','D']
  const rankTable = {}
  rank.forEach((el,idx)=> rankTable[el] = Math.pow(10, idx))
  
  const sorted = [...str].sort((a,b)=> {
    if(a[0] !== b[0]) return rankTable[a[0]] - rankTable[b[0]]
    else return b[1] - a[1]
  })

  for(let i = 0 ; i < N ; i++) {
    const [[a,b],[c,d]] = [sorted[i], str[i]]
    if(a !== c || b !== d) {
      console.log('KO')
      console.log(`${a+b} ${c+d}`)
      return
    }
  } 
  console.log('OK')
}

solution(input)

