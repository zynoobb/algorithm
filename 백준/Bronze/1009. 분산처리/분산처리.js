const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  data.shift()

  const table = Array.from({length : 10}, ()=> [])
  table[0] = [10]
  for(let i = 1 ; i < table.length ; i ++) {
    let j = 1
    while (true) {
      const temp = String(Math.pow(i, j ++)).split('').at(-1)
      if(!table[i].includes(+temp)) table[i].push(+temp)
      else break
    }
  }

  const result = data.map(el => {
    const [temp, b] = el.split(' ')
    const last = temp.split('').at(-1)
    return table[last][(b-1)%table[last].length]
  })

  console.log(result.join('\n'))
}

solution(input)