const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [N,M] = input.shift().split(" ").map(Number)

const verify = (x,y) => {
  return x >= 0 && y >= 0 && x <= M-1 && y <= N-1
}

const BFS = (maze) => {
  let queue = [[1,[0,0]]]
  let visited = Array.from({length : N}, ()=> {
    return Array.from({length : M}, ()=> false)
  })

  while(queue.length) {
    const [count, [x,y]] = queue.shift()
    if(x === M-1 && y === N-1) return count
    else {
      const direct = [[1,0],[0,1],[-1,0],[0,-1]]

      for(let i = 0 ; i < direct.length ; i++) {
        const [dx, dy] = direct[i]
        const [nextX, nextY] = [dx + x, dy + y]
        if(!verify(nextX,nextY) || visited[nextY][nextX]) continue
        else if (maze[nextY][nextX] === 1)  {
          queue.push([count +1, [nextX, nextY]])
          visited[nextY][nextX] = true
        }
      } 
    }
  }
}

function solution(data) {
  const maze = data.map(el=>el.split("").map(Number))

  console.log(BFS(maze))
}

solution(input)
