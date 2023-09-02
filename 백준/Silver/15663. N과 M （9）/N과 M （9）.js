const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N,M], temp] = data.map(el=>el.split(' ').map(Number))
  const arr = temp.sort((a,b)=> a-b)
  const visited = Array.from({length : N}, ()=> false)

  const set = new Set()
  const storage = []

  const DFS = () => {
    if(storage.length === M) {
      set.add(storage.join(' '))
      return
    }

    for(let i = 0 ; i < N ; i++) {
      if(!visited[i]) {
        visited[i] = true
        storage.push(arr[i])
        DFS()
        visited[i] = false
        storage.pop()
      }
    }
  }

  DFS()

  console.log([...set].join('\n'))
}

solution(input)

