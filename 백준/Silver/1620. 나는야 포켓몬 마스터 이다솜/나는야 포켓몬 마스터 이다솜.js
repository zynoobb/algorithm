const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [listLength, questionLength] = input.shift().split(" ")

function solution(data) {
  let nameIdxTable = {}
  let reverseIdxTable = {}
  const listArr = data.splice(0, listLength)
  
  listArr.forEach((el, i)=> {
    nameIdxTable[el] = String(i + 1)
    reverseIdxTable[i + 1] = el
  })

  let result = []

  data.forEach((el)=> {
    !isNaN(el) ? result.push(reverseIdxTable[el]) : result.push(nameIdxTable[el])
  })
  
  console.log(result.join("\n"))
}


solution(input)