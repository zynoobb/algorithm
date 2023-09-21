const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [_,M,...temp] = data
  const sorted = temp[0].split(' ').map(Number).sort((a,b)=> a-b)

  let result = 0
  let [frontIdx, backIdx] = [0, sorted.length - 1]
  while(backIdx - frontIdx > 0) {
    const sum = sorted[frontIdx] + sorted[backIdx]
    if(sum === +M) {
      frontIdx ++
      backIdx --
      result ++
    } else sum < +M ? frontIdx ++ : backIdx --
  }

  console.log(result)
}

solution(input)
