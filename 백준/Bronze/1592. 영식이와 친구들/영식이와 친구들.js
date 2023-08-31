const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [N,M,L] = data.split(' ').map(Number)
  const arr = Array.from({length : N}, (_,idx)=> idx)
  const table = {}
  arr.forEach(el=> table[el] = 0)
  
  let location = 0
  let result = 0
  while(true) {
    table[location] ++
    if(table[location] === M) break

    location = table[location] % 2 !== 0 ?
      (location += L) % N : (N + location - L) % N 
      
    result ++
  }

  console.log(result)
}

solution(input)