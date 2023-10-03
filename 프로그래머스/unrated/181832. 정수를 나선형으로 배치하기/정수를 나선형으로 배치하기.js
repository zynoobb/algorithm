function solution(n) {
  const matrix = Array.from({length : n}, ()=> {
    return Array.from({length : n}, ()=> 0)
  })

  const direction = [[1,0],[0,1],[-1,0],[0,-1]]
  let directionIdx = 0
  let location = [-1,0]

  const locationVerify = (x,y) => {
    return n > x && x >= 0 && n > y && y >= 0
  }

  for(let i = 1 ; i <= n**2 ; i ++) {
    const [dx,dy] = direction[directionIdx%4]
    const [x,y] = location
    const [nx,ny] = [dx + x, dy + y]
    if(locationVerify(nx,ny) && !matrix[ny][nx]) {
      matrix[ny][nx] = i
      location = [nx, ny]
    }
    else {
      const [dx, dy] = direction[++directionIdx%4]
      const [nx,ny] = [dx + x, dy + y]
      matrix[ny][nx] = i
      location = [nx, ny]
    }
  }

  return matrix
}