const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const verify = (X,Y,j,i) => {
  return j >= 0 && i >= 0 && X-1 >= j && Y-1 >= i
}

const getIsland = (matrix) => {
  const set = new Set()
  matrix.forEach((arr)=> {
    arr.forEach((el)=> {
      set.add(el)
    })
  })
  if(set.has(0)) set.delete(0)
  return set.size
}

const act = (arr) => {
  const matrix = arr.map((el)=> el.split(" ").map(Number))
  const [X, Y] = [matrix[0].length,matrix.length]
  const visited = Array.from({length : matrix.length}, ()=> {
    return Array.from({length : matrix[0].length}, ()=> false)
  })
  
  let num = 2
  const DFS = (x,y) => {
    const direct = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]
    visited[y][x] = true
    matrix[y][x] = num
    for(let i = 0 ; i < direct.length ; i++) {
      const [dx, dy] = direct[i]
      const [nextX, nextY] = [dx + x, dy + y]
      if(!verify(X,Y,nextX, nextY) 
      || visited[nextY][nextX] 
      || matrix[nextY][nextX] === 0) continue
      else if(matrix[nextY][nextX] === 1) {
        DFS(nextX, nextY)
      }
    }
  }
  
  for(let i = 0 ; i < matrix.length ; i ++) {
    for(let j = 0 ; j < matrix[i].length ; j ++) {
      if(!visited[i][j] && matrix[i][j] === 1) {
        DFS(j,i)
        num ++
      }
    }
  }

  return getIsland(matrix)
}

function solution(data) {
  const testCase = []

  for(let i = 0 ; i < data.length ; i ++) {
    const temp = data[i].split(" ").map(Number)
    if(temp[0] === 0 && temp[1] === 0) break
    if(temp.length === 2) {
      testCase.push(data.splice(i+1,temp[1]))
    }
  }

  const result = []
  testCase.forEach((el)=> result.push(act(el)))

  console.log(result.join('\n'))
}
solution(input)
