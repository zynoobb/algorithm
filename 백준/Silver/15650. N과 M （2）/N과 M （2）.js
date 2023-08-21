const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [N, M] = data.split(" ").map(Number)
  const visited = Array.from({length : N+1}, ()=> false)
  const result = []
  const storage = []

  const DFS = (n, leng) => {
    if(leng === M) {
      result.push([...storage])
      return
    }

    for(let i = n ; i <= N ; i ++) {
      if(visited[i]) continue
      visited[i] = true
      storage.push(i)
      DFS(i, leng + 1)
      storage.pop()
      visited[i] = false
    }
  }

  DFS(1,0)

  console.log(result.map(el=>el.join(' ')).join('\n'))
}

solution(input)
