const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const cal = (h,m,s) => {
  return [h,m,s].reduce((acc,cur,idx)=> {
    return acc + cur * Math.pow(60, 2 - idx)
  },0)
}

const act = (str) => {
  const [h1,m1,s1,h2,m2,s2] = str.split(' ')
  let dif = cal(h2,m2,s2) - cal(h1,m1,s1)
  
  let idx = 2
  const storage = []
  while (idx >= 0) {
    const divide = Math.pow(60, idx--)
    storage.push(Math.floor(dif / divide))
    dif %= divide
  }

  return storage.join(' ')
}

function solution(data) {
  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input)