function solution(triangle) {
  for(let i = 1 ; i < triangle.length ; i++) {
    for(let j = 0 ; j < triangle[i].length ; j++) {
      let temp
      if(j === 0) temp = triangle[i-1][j]
      else if(i === j) temp = triangle[i-1][j-1]
      else temp = Math.max(triangle[i-1][j],triangle[i-1][j-1])
      triangle[i][j] += temp
    }
  }
  return Math.max(...triangle.at(-1))
}