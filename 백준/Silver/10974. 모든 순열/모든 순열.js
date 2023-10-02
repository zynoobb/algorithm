const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const arr = Array.from({length : data}, (_,i)=> i + 1)
  
  const result = []
  const storage = []
  const visited = Array.from({length : data}, ()=> false)

  const backTracking = () => {
    if(storage.length === +data) {
      result.push(storage.join(' '))
      return
    }
    for(let i = 0 ; i < arr.length ; i ++) {
      if(!visited[i]) {
        visited[i] = true
        storage.push(arr[i])
        backTracking()
        storage.pop()
        visited[i] = false
      }
    }
  }

  backTracking()

  console.log(result.join('\n'))
}

solution(input)  

