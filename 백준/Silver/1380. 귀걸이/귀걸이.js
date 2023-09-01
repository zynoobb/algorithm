const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')


const act = ([num,names], idx) => {
  const table = {}
  num.forEach((el)=> table[el] = (table[el] || 0) + 1)
  let result
  for(let i in table) {
    if(table[i] === 1) {
      result = i
      break
    }
  }
  
  return `${idx + 1} ${names[result-1]}`
}

function solution(data) {
  const testCase = []
  let temp = [[],[]]
  data.forEach((el)=> {
    if(isNaN(el)) {
      const [a,_] = el.split(' ')
      !isNaN(a) ? temp[0].push(+a) : temp[1].push(el)
    }
    else {
      testCase.push(temp)
      temp = [[],[]]
    }
  })
  testCase.shift()

  const result = testCase.map((el,idx)=> act(el,idx))
  console.log(result.join('\n'))
}

solution(input)