const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const N = Number(input.shift())

const locationVerify = (x,y) => {
  return x >= 0 && y >= 0 && N-1 >= x && N-1 >= y
}

const act = (matrix) => {
  const visited = Array.from({length : N}, ()=> {
    return Array.from({length : N}, ()=> false)
  })
  let count = 0

  const BFS = (x,y,color) => {
    const queue = [[x,y]]
    const direct = [[0,1],[0,-1],[1,0],[-1,0]]
    while(queue.length) {
      const [x,y] = queue.shift()
      if(visited[y][x]) continue
      visited[y][x] = true
      matrix[y][x] = count
      for(let i = 0 ; i < direct.length ; i ++) {
        const [dx, dy] = direct[i]
        const [nextX, nextY] = [dx + x, dy + y]
        if(!locationVerify(nextX,nextY) 
        || visited[nextY][nextX] 
        || matrix[nextY][nextX] !== color) continue

        queue.push([nextX, nextY])
      }
    }
  }

  for(let i = 0 ; i < N ; i ++) {
    for(let j = 0 ; j < N ; j ++) {
      if(!visited[i][j]) {
        BFS(j,i,matrix[i][j])
        count ++
      }
    }
  }
  return count
}

function solution(data) {
  const threeAble = data.map(el=> el.split(''))
  const twoAble = threeAble.map((arr)=> arr.map((el)=> {
    if(el === "R") return "G"
    else return el
  }))

  console.log([act(threeAble), act(twoAble)].join(' '))
}

solution(input)