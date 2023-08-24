function solution(board) {
  const N = board.length
  const verify = (x,y) => {
    return x >= 0 && y >= 0 && N - 1 >= x && N - 1 >= y
  }
  const mineTable = {}
  
  const direction = [[0,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]]
  board.forEach((arr,y)=> {
    arr.forEach((el,x) => {
      if(el === 1) {
        for(let i = 0 ; i < direction.length ; i ++) {
          const [dx, dy] = direction[i]
          const [nextX, nextY] = [dx + x, dy + y]
          if(verify(nextX,nextY)) mineTable[[nextX,nextY]] = true
        }
      }
    })
  })
  
  return N*N - Object.entries(mineTable).length
}