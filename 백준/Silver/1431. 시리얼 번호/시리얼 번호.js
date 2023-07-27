const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

const findReduce = (str) => {
  const sum = [...str].filter((el)=> !isNaN(el))
    .reduce((acc,cur)=> acc + Number(cur), 0)
  return sum
}

const compareReduce = (str1, str2) => {
  return findReduce(str1) - findReduce(str2)
}

function solution(data) {
  const result = data.sort((a,b)=> {
    if(a.length !== b.length) return a.length - b.length
    else if(compareReduce(a,b) !== 0) return compareReduce(a,b)
    else return a.localeCompare(b)
  })

  console.log(result.join("\n"))
}

solution(input)
