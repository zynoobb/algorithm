const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

  function solution(data) {
    const names = ['Soongsil', 'Korea', 'Hanyang']
    const arr = data.split(' ').map(Number)
    const sum = arr.reduce((acc,cur)=> acc + cur, 0)
    const minIdx = arr.indexOf(Math.min(...arr))

    console.log(sum >= 100 
      ? 'OK' 
      : names[minIdx]
    ) 
  }

  solution(input)