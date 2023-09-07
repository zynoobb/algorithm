const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = input.shift()

const act = (n, i) => { 
  const arr = Array.from({length : +n+1}, (_,idx)=> {
    if(idx === 0 || idx === n - 1) return '#'.repeat(n)
    else if(idx === +n) return ''
    else return '#' + 'J'.repeat(n - 2) + '#'
  })
  if(i === N-1) arr.pop()
  return arr.join('\n')
}

function solution(data) {
  const result = data.map((el,idx)=> act(el,idx))
  console.log(result.join('\n'))
}

solution(input)
