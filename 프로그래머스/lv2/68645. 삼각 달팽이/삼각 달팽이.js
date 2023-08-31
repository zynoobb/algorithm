function solution(n) {
  const arr = Array.from({length : n}, (_,idx)=> {
    return Array.from({length : idx+1}, ()=> 0)
  })

  let triangleSize = 0
  for(let i = 1 ; i <= n ; i++) triangleSize += i
  
  const verify = (x,y) => {
    return x >= 0 && y >= 0 && n > x && n > y
  }

  let location = [0,0]
  const direction = [[0,1],[1,0],[-1,-1]]
  let directionIdx = 0
  for(let i = 0 ; i < triangleSize ; i ++) {
    const [x,y] = location
    arr[y][x] = i + 1

    const [dx, dy] = direction[directionIdx%3]
    const [nx, ny] = [dx + x, dy + y]

    if(verify(nx, ny) && !arr[ny][nx]) location = [nx, ny]
    else {
      const [dx, dy] = direction[++directionIdx%3]
      const [nx, ny] = [dx + x, dy + y]
      location = [nx, ny]
    }
  }
  return arr.flat()
}