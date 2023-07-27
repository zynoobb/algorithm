const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const idx = input.shift().split(" ")[0]

function solution(data) {
  let noListenTable = {}
  const noListen = data.splice(0, idx)
  
  noListen.forEach((el)=> noListenTable[el] = true)
  
  let noListenNoSee = []

  data.forEach((el)=> {
    if(noListenTable[el]) noListenNoSee.push(el)
  })

  const result = noListenNoSee.sort()

  console.log([result.length, ...result].join("\n"))
}

solution(input)