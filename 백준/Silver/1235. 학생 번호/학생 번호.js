const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split('\n')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const leng = input.shift()

const recursive = (arrs, i) => {
  let set = new Set()

  arrs.forEach((el)=> {
    const slice = el.slice(0, i)
    set.add(slice)
  })

  return set.size !== Number(leng) ? recursive(arrs, i + 1) : i
}

function solution(data) {
  const reverseData = data.map((el)=> {
    const temp = el.split("").reverse().join("")
    return temp
  })

  const result = recursive(reverseData, 1)
  console.log(result)
}

solution(input)
