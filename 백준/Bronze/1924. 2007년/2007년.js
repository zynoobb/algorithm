const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  const [m, d] = data.split(' ').map(Number)
  const months = [0,31,28,31,30,31,30,31,31,30,31,30,31]
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const table = {}
  months.reduce((acc,cur,idx)=> {
    const sum = acc + cur
    table[idx] = sum
    return sum
  },0)
  
  const daysum = table[m-1] + d
  console.log(days[daysum%7])
}

solution(input)
