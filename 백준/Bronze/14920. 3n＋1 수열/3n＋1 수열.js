const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

  function solution(data) {
    const arr = [+data]

    let idx = 1
    while (true) {
      if(arr[idx -1] === 1) break
      arr[idx] = arr[idx-1] % 2 === 0 ? arr[idx-1]/2 : 3*arr[idx-1]+1
      idx ++
    }

    console.log(idx)
  }

  solution(input)