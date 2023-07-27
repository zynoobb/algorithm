const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split(' ')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

const act = (n,m) => {
  let x = n
  let y = m
  while ( y !== 0) {
    let temp = x%y
    x = y
    y = temp
  }

  return (n*m)/x
}

function solution(data) {
  const [a,b] = data.sort((x,y)=> y - x).map((el)=> Number(el))
  const min = act(a,b)
  const max = a*b/min

  console.log([max, min].join("\n"))
}

solution(input)