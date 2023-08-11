const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [n,m]= input.shift().split(" ")

function solution(data) {
  if(n === "1" && m === "1") {
    console.log(data[0])
    return
  } else if(n === "1") {
    const temp = data[0].split("")
    console.log(Math.max(...temp))
    return
  } else if(m === "1") {
    console.log(Math.max(...data))
    return
  }

  const board = data.map(el=> el.split("").map(Number))

  for(let i = 1 ; i < board.length ; i ++) {
    for(let j = 1 ; j < board[i].length ; j ++) {
      if(board[i][j] === 0) continue
      else {
        board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1  
      }
    }
  }
  
  let result = 0

  for(let i = 0 ; i < board.length ; i ++) {
    for(let j = 0 ; j < board[i].length ; j ++) {
      if(board[i][j] > result) result = board[i][j]
    }
  }

  console.log(result**2)
}

solution(input)
 