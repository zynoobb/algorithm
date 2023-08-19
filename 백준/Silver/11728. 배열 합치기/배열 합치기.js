const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n').map(el=>el.split(" ").map(Number))

const [aLength,bLength] = input.shift()
function solution(data) {
  const [A,B] = data
  const result = []
  let [aIdx, bIdx] = [0,0]

  const lowerCaseAct = (x) => {
    if(x === "a") {
      result.push(A[aIdx])
      aIdx ++
    } else {
      result.push(B[bIdx])
      bIdx ++
    }
  }

  const restCaseAct = (x) => {
    if(x === "a") {
      result.push(...A.slice(aIdx))
      aIdx = aLength
    } else {
      result.push(...B.slice(bIdx))
      bIdx = bLength
    }
  }

  while (aIdx < aLength || bIdx < bLength) {
    if(aIdx < aLength && bIdx < bLength) {
      A[aIdx] < B[bIdx] ? lowerCaseAct("a") : lowerCaseAct("b")
    } else {
      aIdx < aLength ? restCaseAct("a") : restCaseAct("b")
    }
  }

  console.log(result.join(' '))
}
solution(input)
