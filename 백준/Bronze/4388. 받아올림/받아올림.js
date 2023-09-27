const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const [a,b] = str.split(' ').map(el => el.split('').map(Number).reverse())
    .sort((x,y)=> y.length - x.length)
  
  let [toggle,count] = [0,0]
  
  for(let i = 0 ; i < a.length ; i ++) {
    const temp = a[i] + (b[i] || 0) + toggle
    if(temp >= 10) {
      toggle = 1
      count ++
    } else toggle = 0
  }

  return count
}

function solution(data) {
  data.pop()

  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input) 