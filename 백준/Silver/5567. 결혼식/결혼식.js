const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const [N,_,...rest] = input

function solution(data) {
  const table = Array.from({length : +N+1}, ()=> [])
  data.forEach((el)=> {
    const [to,from] = el.split(' ').map(Number)
    table[to].push(from)
    table[from].push(to)
  })

  const result = new Set()

  table[1].forEach((friend)=> {
    result.add(friend)
    table[friend].forEach((friendOfFriend)=> {
      result.add(friendOfFriend)
    })
  })

  console.log(result.size !== 0 ? result.size - 1 : 0)
}

solution(rest)