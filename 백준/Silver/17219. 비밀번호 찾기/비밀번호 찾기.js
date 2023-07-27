const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let leng = input.shift().split(" ")[0]

function solution(data) {
  let listTable = {}
  const listArr = data.splice(0, leng)
  
  listArr.forEach((el)=> {
    const [page, pwd] = el.split(" ")
    listTable[page] = pwd
  })
  
  let result = []
  data.forEach((el)=> result.push(listTable[el]))

  console.log(result.join("\n"))
}

solution(input)
