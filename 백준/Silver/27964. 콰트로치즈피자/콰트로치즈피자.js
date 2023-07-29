const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  const arr = data[0].split(" ")

  const filtered = arr.filter((str)=> {
    return str.split("Cheese").at(-1) === ""
  })
  
  result = new Set(filtered).size
  result >= 4 ? console.log("yummy") : console.log("sad")
}
solution(input)
