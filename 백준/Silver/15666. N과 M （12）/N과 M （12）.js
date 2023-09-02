const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N,M], temp] = data.map(el=>el.split(' ').map(Number))
  const arr = temp.sort((a,b)=> a-b)

  const set = new Set()
  const storage = []

  const DFS = (n) => {
    if(storage.length === M) {
      set.add(storage.join(' '))
      return
    }

    for(let i = n ; i < N ; i++) {
      storage.push(arr[i])
      DFS(i)
      storage.pop()
    }
  }

  DFS(0)

  console.log([...set].join('\n'))
}

solution(input)

