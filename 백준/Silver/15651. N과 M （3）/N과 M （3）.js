const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [N, M] = data.split(' ').map(Number)
  const arr = Array.from({length : N}, (_,idx)=> idx + 1)
  
  const result = []
  const storage = []
  const backTracking = () => {
    if(storage.length === M) {
      result.push(storage.join(' '))
      return
    }

    for(let i = 0 ; i < N ; i ++) {
      storage.push(arr[i])
      backTracking()
      storage.pop()
    }
  }
  backTracking()

  console.log(result.join('\n'))
}

solution(input)