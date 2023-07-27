const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.pop()

const includes = "()[]"

const inputData = input.map((str)=> {
  let temp = str.split("")
  return temp.filter((unit)=> includes.includes(unit)).join("")
})

const act = (str) => {
  const aType = "()"
  const bType = "[]"
  while(true) {
    if(str.length === 0) return "yes"
    else if(str.length !== 0 
      && str.indexOf(aType) === -1 
      && str.indexOf(bType) === -1) {
      return "no"
    }

    if(str.indexOf(aType !== -1)) str = str.replace(aType, "")
    if(str.indexOf(bType !== -1)) str = str.replace(bType, "")
  }
}

function solution(data) {
  let result = []
  
  data.forEach((el)=> result.push(act(el)))
  console.log(result.join("\n"))
}


solution(inputData)