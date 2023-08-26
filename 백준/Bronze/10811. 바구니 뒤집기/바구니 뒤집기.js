const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const [N, _] = input.shift().split(' ')
function solution(data) {
  const arr = Array.from({length : N}, (_,idx)=> idx + 1)
  
  data.forEach((el)=> {
    const [a,b] = el.split(' ').map(Number)
    const reversed = arr.slice(a-1,b).reverse()
    arr.splice(a-1,b-a+1, ...reversed)
  })

  console.log(arr.join(' '))
}

solution(input)