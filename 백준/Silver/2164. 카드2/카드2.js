const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")


function solution(data) {
  let twoSquare = Array.from({length : 20}, (_, idx)=> Math.pow(2,idx))
  let point

  for(let i = 0 ; i < twoSquare.length ; i++){
    if(Number(data) === twoSquare[i]) {
      console.log(data[0])
      return
    } else if(Number(data) < twoSquare[i]) {
      point = twoSquare[i-1]
      break
    }
  }
  console.log((data - point) * 2)
}

solution(input)


// 1 1 
// 2 2   
// 3 2   
// 4 4   
// 5 2   
// 6 4   
// 7 6   
// 8 8   
// 9 2   
// 10 4  
// 11 6  
// 12 8  
// 13 10 
// 14 12 
// 15 14 
// 16 16 