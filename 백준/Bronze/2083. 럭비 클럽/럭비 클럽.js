const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

input.pop()
function solution(data) {
  const result = data.map((el)=> {
    const [name, age, weight] = el.split(' ')
    if(age > 17 || weight >= 80) return `${name} Senior`
    else return `${name} Junior`
  })

  console.log(result.join('\n'))
}

solution(input)