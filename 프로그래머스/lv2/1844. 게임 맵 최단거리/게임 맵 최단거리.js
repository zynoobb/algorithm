function solution(maps) {
  let queueIdx = 0
  let queue = [{ count: 1, location: [0, 0] }]
  let row = maps.length - 1, col = maps[0].length - 1

  const verify = (x, y) => {
    return x >= 0 && y >= 0 && y <= row && x <= col
  }

  let direct = [[1, 0],[0, 1],[-1, 0],[0, -1]]

  let visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  )
  visited[0][0] = true

  while (queue.length > queueIdx) {
    let { count, location } = queue[queueIdx]
    let [x, y] = location
    if (x === col && y === row) return count
    else {
      for (let i = 0 ; i < direct.length ; i++) {
        let [dx, dy] = direct[i]
        let nextX = dx + x,
          nextY = dy + y
        
        if (!verify(nextX, nextY) || (visited[nextY][nextX])) continue

        if (maps[nextY][nextX] === 1) {
          queue.push({ count: count + 1, location: [nextX, nextY] })
          visited[nextY][nextX] = true
        }
      }
    }
    queueIdx++
  }
  return -1
}