const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [[N, M], temp] = data.map(el => el.split(' ').map(Number))
  const arr = temp.sort((a,b)=> a-b)
  
  const result = []
  const storage = []
  const visited = Array.from({length : N}, ()=> false)
  const backTracking = (k) => {
    if(storage.length === M) {
      result.push(storage.join(' '))
      return
    }

    for(let i = k ; i < N ; i ++) {
      if(!visited[i]) {
        storage.push(arr[i])
        visited[i] = true
        backTracking(i)
        storage.pop()
        visited[i] = false
      }
    }
  }
  backTracking(0)

  console.log(result.join('\n'))
}

solution(input)