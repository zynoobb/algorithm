const fs = require('fs')
// const input = fs.readFileSync('입력/3107.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

const padStartAct = (arr) => {
  const result = arr.map((el)=> {
    if(el.length < 4) return el.padStart(4,"0")
    else return el
  })
  return result
}

const includesDubbleSemi = (data) => {
  const arr = data.split("::")
  const [part1, part2] = arr
  const unit1 = padStartAct(part1.split(":"))
  const unit2 = padStartAct(part2.split(":"))
  const zeroUnit = Array.from({length : 8 - (unit1.length + unit2.length)}, ()=> "0000")
  const result = [...unit1, ...zeroUnit, ...unit2].join(":")
  console.log(result)
}

const notIncludesDubbleSemi = (data) => {
  const arr = data.split(":")
  const result = padStartAct(arr)
  console.log(result.join(":"))
}


function solution(data) {
  if(data.includes("::")) includesDubbleSemi(data)
  else notIncludesDubbleSemi(data)
}

solution(input)