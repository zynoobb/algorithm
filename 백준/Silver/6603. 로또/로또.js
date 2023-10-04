const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (str) => {
  const [N,...arr] = str.split(' ').map(Number)
  const result = []
  const storage = []
  const visited = Array.from({length : N}, ()=> false)
  const backTracking = (n) => {
    if(storage.length === 6) {
      result.push(storage.join(' '))
      return
    }

    for(let i = n ; i < N ; i ++) {
      if(!visited[i]) {
        visited[i] = true
        storage.push(arr[i])
        backTracking(i + 1)
        storage.pop()
        visited[i] = false
      }
    }
  }

  backTracking(0)
  return [...result, '']
}

function solution(data) {
  data.pop()

  const temp = data.map(el => act(el))
  const result = temp.flat()
  result.pop()
  console.log(result.join('\n'))
}

solution(input)  
