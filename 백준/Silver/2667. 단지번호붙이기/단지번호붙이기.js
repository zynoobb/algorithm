const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")


const makingTable = (matrix) => {
  const table = {}

  matrix.forEach((arr)=> {
    arr.forEach((el)=> {
      if(el !== 0) table[el] = (table[el] || 0) + 1
    })
  })
  
  const houseHold = Object.entries(table).map((el)=> el[1]).sort((a,b)=> a-b)
  return [houseHold.length, ...houseHold]
}
const verify = (a,b,N) => {
  return a >= 0 && b >= 0 && N-1 >= a && N-1 >= b
}

function solution(data) {
  const N = input.shift() 
  const arr = data.map((el)=> el.split("").map(Number))
  const visited = Array.from({length : N}, ()=> {
    return Array.from({length : N}, ()=> false)
  })

  let apartments = 2
  const DFS = ([x,y]) => {
    const direct = [[1,0], [-1,0], [0,1], [0,-1]]
    visited[y][x] = true
    arr[y][x] = apartments
    for(let i = 0 ; i < direct.length ; i++) {
      const [dx,dy] = direct[i]
      const [nextX, nextY] = [dx + x, dy + y]
      if(!verify(nextX, nextY,N) || visited[nextY][nextX] || arr[nextY][nextX] === 0) continue
      else if(arr[nextY][nextX] === 1) {
        DFS([nextX, nextY])
      }
    }
  }

  for(let i = 0 ; i < N ; i++) {
    for(let j = 0 ; j < N ; j++) {
      if(visited[i][j]) continue
      else if(arr[i][j] === 1) {
        DFS([j,i])
        apartments ++
      }
    }
  }
  const result = makingTable(arr)
  console.log(result.join("\n"))
}

solution(input)