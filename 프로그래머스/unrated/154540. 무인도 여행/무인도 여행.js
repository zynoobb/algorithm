function solution(maps) {
    const visited = Array.from({length : maps.length}, ()=> {
      return Array.from({length : maps[0].length}, ()=> false)
    })
    const matrix = maps.map((el=>el.split("")))
    const [X,Y] = [matrix[0].length, matrix.length]
    const result = []
    let foods = 0
    
    const verify = (x,y) => {
      return x >= 0 && y >= 0 && Y-1 >= y && X-1 >= x
    }
    
    const DFS = (food, y, x) => {
      if(visited[y][x]) return
      visited[y][x] = true
      const direct = [[0,1],[0,-1],[1,0],[-1,0]]
      foods += +food
  
      for(let i = 0 ; i < direct.length ; i++) {
        const [dx, dy] = direct[i]
        const [nextX, nextY] = [dx + x, dy + y]
        if(!verify(nextX,nextY) || visited[nextY][nextX] || matrix[nextY][nextX] === "X") continue
        DFS(matrix[nextY][nextX],nextY,nextX)
      }
    }
    
    for(let i = 0 ; i < Y ; i++){
      for(let j = 0 ; j < X ; j++) {
        if(matrix[i][j] !== "X" && !visited[i][j]) {  
          DFS(matrix[i][j],i,j)
          result.push(foods)
          foods = 0
        }
      }
    }
  
  return result.length > 0 ? result.sort((a,b)=> a-b) : [-1]
}