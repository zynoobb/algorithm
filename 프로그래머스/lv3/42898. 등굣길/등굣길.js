function solution(m, n, puddles) {
  const matrix = Array.from({length : n}, ()=> {
    return Array.from({length : m}, ()=> 0)
  })
  
  puddles.forEach((el)=> {
    const [x,y] = el
    matrix[y-1][x-1] = -1
  })
  matrix[0][0] = 1
  
  for(let i = 0 ; i < n ; i ++) {
    for(let j = 0 ; j < m ; j ++) {
      if(matrix[i][j] === -1) continue
      let route = matrix[i][j]
      route += j > 0 && matrix[i][j-1] !== -1 ? matrix[i][j-1] : 0
      route += i > 0 && matrix[i-1][j] !== -1 ? matrix[i-1][j] : 0
      route = route % 1000000007
      matrix[i][j] = route
    }
  }
  return matrix[n-1][m-1]
}
