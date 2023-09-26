const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const table = {
  '@' : 'a',
  '[' : 'c',
  '!' : 'i',
  ';' : 'j',
  '^' : 'n',
  '0' : 'o',
  '7' : 't',
  '#' : 'v',
  '$' : 'w'
}

const act = (str) => {
  str = str.replaceAll('\\\\\'', '$')
  str = str.replaceAll('\\\'', '#')

  const leng = Math.ceil(str.length / 2)
  let changed = 0
  let changedStr = ''
  for(let i = 0 ; i < str.length ; i++) {
    if(table[str[i]]) {
      changedStr += table[str[i]]
      changed ++
    } else changedStr += str[i]
    if(changed >= leng) return 'I don\'t understand'
  }
  
  return changedStr
}

function solution(data) {
  data.shift()

  const result = data.map(el => act(el))
  console.log(result.join('\n'))
}

solution(input) 