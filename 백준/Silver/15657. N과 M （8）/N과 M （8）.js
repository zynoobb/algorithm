const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [N,M] = input.shift().split(' ').map(Number)

function solution(data) {
  const arr = data[0].split(' ').map(Number).sort((a,b)=> a-b)
  const result = []
  const storage = []

  const DFS = () => {
    if(storage.length === M) {
      result.push([...storage])
      return
    }
    
    for(let i = 0 ; i < N ; i++) {
      if(storage[storage.length - 1] > arr[i]) continue
      storage.push(arr[i])
      DFS()
      storage.pop(arr[i])
    }
  }

  DFS()

  console.log(result.map(el=>el.join(' ')).join('\n'))
}

solution(input)
