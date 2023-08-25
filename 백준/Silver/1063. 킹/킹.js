const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const verify = (x,y) => {
  return x >= 0 && y >= 0 && 7 >= x && 7 >= y
}

const findLocation = (el) => {
  const locationX = "ABCDEFGH"
  const locationY = "87654321"
  if(el === String(el)) {
    const [a,b] = el.split('')
    return [locationX.indexOf(a),locationY.indexOf(b)]
  } else {
    const [a,b] = el
    return locationX[a] + locationY[b]
  }
}

function solution(data) {
  const commandTable = {
    "R" : [1,0],
    "L" : [-1,0],
    "B" : [0,1],
    "T" : [0,-1],
    "RT" : [1,-1],
    "LT" : [-1,-1],
    "RB" : [1,1],
    "LB" : [-1,1]
  }
  
  const [king, stone, N] = data.shift().split(' ')
  let [kingLocation, stoneLocation] = [findLocation(king), findLocation(stone)]
  
  for(let i = 0 ; i < N ; i ++) {
    const [dx,dy] = commandTable[data[i]]
    const [nextX, nextY] = [dx + kingLocation[0], dy + kingLocation[1]]
    if(!verify(nextX, nextY)) continue

    if(nextX === stoneLocation[0] && nextY === stoneLocation[1]) {
      const [nextStoneX, nextStoneY] = [dx + stoneLocation[0], dy + stoneLocation[1]]
      if(!verify(nextStoneX, nextStoneY)) continue
      kingLocation = [nextX, nextY]
      stoneLocation = [nextStoneX, nextStoneY]
    } else {
      kingLocation = [nextX, nextY]
    }
  }

  console.log([findLocation(kingLocation), findLocation(stoneLocation)].join('\n'))
}

solution(input)