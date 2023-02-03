function solution(dots) {
  let x = []
  let y = []
  for(let i = 0 ; i < dots.length ; i ++){
    x.push(dots[i][0])
    y.push(dots[i][1])
  }
  let lx = Math.max(...x)
  let sx = Math.min(...x)
  let ly = Math.max(...y)
  let sy = Math.min(...y)
  
  return Math.abs((lx-sx)*(ly-sy))
}