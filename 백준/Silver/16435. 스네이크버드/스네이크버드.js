const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [_, init]= input.shift().split(" ")

function solution(data) {
  const fruits = data[0].split(" ").sort((a,b)=> a-b).map((el)=> +el)
  let leng = +init

  for(let i = 0 ; fruits.length ; i ++) {
    if(leng >= fruits[i]) leng ++
    else break
  }
  console.log(leng)
}

solution(input)
 