const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function solution(data) {
  const deck = data[1].split(" ")
  const find = data[3].split(" ")
  
  let deckList = {}
  deck.forEach((el)=> deckList[el] = (deckList[el] || 0) + 1)
  let result = []
  find.forEach((el)=> result.push(deckList[el] ? deckList[el] : 0))

  console.log(result.join(" "))
}

solution(input)
