function solution(dirs) {
  let moving = {
    "U" : [0,1],
    "D" : [0,-1],
    "L" : [-1,0],
    "R" : [1,0]
  }
  
  let visited = new Set()
  let maxHigh = 5, maxLow = -5
  
  let location = [0,0]
  const verify = ([x,y]) => {
    if( x > maxHigh || x < maxLow || y > maxHigh || y < maxLow) return false
    return true
  }
  
  for(let i = 0 ; i < dirs.length ; i ++) {
    let move = moving[dirs[i]]
    let afterStep = [location[0] + move[0], location[1] + move[1]]
    if(!verify(afterStep)) continue
    else {
      location = afterStep
      if(dirs[i] === "U") {
        visited.add(`${afterStep[0]}&${afterStep[1]-0.5}`)
      } else if(dirs[i] === "D") {
        visited.add(`${afterStep[0]}&${afterStep[1]+.5}`)
      } else if(dirs[i] === "L") {
        visited.add(`${afterStep[0]+0.5}&${afterStep[1]}`)
      } else if(dirs[i] === "R") {
        visited.add(`${afterStep[0]-0.5}&${afterStep[1]}`)
      }
    }
  }
  return visited.size
}