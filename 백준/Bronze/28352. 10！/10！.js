const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  let arr = [[10,6]]
  
  for(let i = 11 ; i <= 17 ; i++) {
    arr[i - 10] = [i , (arr[i - 11][0] + 1) * (arr[i - 11][1])]
  }

  console.log(arr.filter((el)=> el[0] === Number(data))[0][1])
}

solution(input)
