const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [N,M] = input.shift().split(' ').map(Number)

function solution(data) {
  const arr = data[0].split(' ').map(Number).sort((a,b)=> a-b)
  const visited = Array.from({length : N}, ()=> false)

  const result = []
  const storage = []

  const DFS = () => {
    if(storage.length === M) {
      result.push([...storage])
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

  console.log(result.map(el=>el.join(' ')).join('\n'))
}

solution(input)
