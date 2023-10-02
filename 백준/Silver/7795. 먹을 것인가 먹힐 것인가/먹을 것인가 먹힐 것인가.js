const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const binarySearch = (arr) => {
  const [aArr,bArr] = arr.map(el => el.split(' ').map(Number).sort((x,y)=> x-y))
  let [sum,idx] = [0,0]
  
  aArr.forEach(a => {
    while(a > bArr[idx] && idx < bArr.length) {
      idx ++
    }
    sum += idx
  })
  return sum
}

function solution(data) {
  data.shift()

  const testCases = []
  data.forEach((_, idx)=> {
    if(idx % 3 === 0) testCases.push([data[idx + 1], data[idx + 2]])  
  })

  const result = testCases.map(el => binarySearch(el))
  console.log(result.join('\n'))
}

solution(input)  

