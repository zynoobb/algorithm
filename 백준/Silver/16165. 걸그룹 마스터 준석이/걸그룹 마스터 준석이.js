const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split("\n")

const [_, quizs] = input.shift().split(" ")

function solution(data) {
  const temp = data.splice(data.length - quizs*2)
  const quiz = temp.map((el,idx)=> {
    return idx % 2 === 0 ? [el, temp[idx+1]] : false
  }).filter((v)=> v)

  let groupsTable = {}
  let namesTable = {}
  let tempGroup = ""
  data.forEach((el,idx)=> {
    if(!isNaN(data[idx+1])) {
      groupsTable[el] = []
      tempGroup = el
    }
    else if(!isNaN(el)) {
      let tempNames = []
      for(let i = idx + 1 ; i <= +el + idx ; i ++) {
        tempNames.push(data[i])
      }
      groupsTable[tempGroup] = tempNames.sort()
    }
    else if(isNaN(el)) namesTable[el] = tempGroup
  })

  let result = []

  quiz.forEach((el)=>{
    const [question, type] = el
    if(type === "1") result.push(namesTable[question])
    else groupsTable[question].forEach((name)=> result.push(name))
  })

  console.log(result.join("\n"))
}

solution(input)
 