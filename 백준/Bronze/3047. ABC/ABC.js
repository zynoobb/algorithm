const { table } = require('console')
const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

  function solution(data) {
    const [nums,[str]] = data.map(el=> el.split(' '))
    
    const table = {}
    const alps = ['A', 'B', 'C']
    nums.sort((a,b)=> a-b).forEach((el,idx)=> {
      table[alps[idx]] = el
    })

    const result = str.split('').map(el => table[el]).join(' ')
    console.log(result)
  }

  solution(input)