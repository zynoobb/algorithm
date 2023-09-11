const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const temp = str.split('').map((el,idx)=> {
    if(idx % 2 === 0) {
      const sum = el * 2 >= 10 
        ? String(el * 2).split('').reduce((acc,cur)=> acc + + cur, 0) 
        : el * 2
      return sum
    } else return + el
  })
  return temp.reduce((a,c)=> a+c) % 10 === 0 ? 'T' : 'F'
}

function solution(data) {
  data.shift()

  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)