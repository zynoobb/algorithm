const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [N, M] = data.split(" ").map(Number)

  const result = []
  const storage = []

  const DFS = (n,leng) => {
    if(leng === M) {
      result.push([...storage])
      return
    } 

    for(let i = n ; i <= N ; i++) {
      storage.push(i)
      DFS(i, leng+1)
      storage.pop()
    }
  }

  DFS(1,0)

  console.log(result.map(el=>el.join(' ')).join('\n'))
}

solution(input)
