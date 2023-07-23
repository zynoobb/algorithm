const fs = require('fs')
// const input = fs.readFileSync('입력/1264.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

let arrs = []
input.forEach((str)=> {
  let temp = []
  let tempArrs = str.split("")
  tempArrs.forEach((el)=> {
    temp.push(el.toLowerCase())
  })
  arrs.push(temp)
})

const vowels = "aeiou"

function solution (arrs) {
  let result = []
  for(let arr of arrs) {
    if(arr[0] === "#") break
    let temp = 0
    for(let str of arr) {
      if(vowels.includes(str)) temp ++
    }
    result.push(temp)
  }
  console.log(result.join("\n"))
}

solution(arrs)
