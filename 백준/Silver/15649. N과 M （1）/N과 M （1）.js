const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [n,m] = data.split(" ").map(Number)
  const result = []
  const visited = Array.from({length : n+1}, ()=> false)
  const storage = Array.from({length : m})

  const DFS = (x) => {
    if(m === x) result.push([...storage])
    else {
      for(let i = 1 ; i <= n ; i ++) {
        if(!visited[i]) {
          storage[x] = i
          visited[i] = true
          DFS(x+1)
          visited[i] = false
        }
      }
    }
  }

  DFS(0)

  console.log(result.map(el=>el.join(" ")).join("\n"))
}
solution(input)
