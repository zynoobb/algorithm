const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

  const act = (str) => {
    const table = {}
    let temp = ''
    
    for(let i = 0 ; i < str.length ; i++) {
      table[str[i]] = (table[str[i]] || 0) + 1
      temp += str[i]
      if(table[str[i]] % 3 === 0) {
        temp += str[i]
        i ++
      }
    }

    return str === temp ? 'OK' : 'FAKE'
  }

  function solution(data) {
    data.shift()

    const result = data.map(el => act(el))
    console.log(result.join('\n'))
  }

  solution(input)