const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const verify = (arr) => {
  const vowels = ['a','e','i','o','u']
  const table = {}
  arr.forEach((el)=> {
    vowels.indexOf(el) !== -1 
    ? table['vowels'] = (table['vowels'] || 0) + 1 
    : table['cons'] = (table['cons'] || 0) + 1
  })

  return table['vowels'] > 0 && table['cons'] > 1
}

function solution(data) {
  const [[N,M], temp] = data.map(el => el.split(' '))
  const chars = temp.sort()
  
  const result = []
  const storage = []
  const visited = Array.from({length : M}, ()=> false)

  const backTracking = (n) => {
    if(storage.length === +N) {
      if(verify(storage)) result.push(storage.join(''))
      return
    }

    for(let i = n ; i < M ; i ++) {
      if(visited[i]) continue
      visited[i] = true
      storage.push(chars[i])
      backTracking(i)
      storage.pop()
      visited[i] = false
    }
  }

  backTracking(0)

  console.log(result.join('\n'))
}

solution(input)