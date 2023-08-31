const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [location, str] = data
  const table = {}
  const keys = ['qwertyuiop','asdfghjkl','zxcvbnm']
  keys.forEach((key, i)=> {
    key.split('').forEach((el,j)=> {
      table[el] = [i,j]
    })
  })
  let [left, right] = location.split(' ').map(el=> table[el])
  const leftKeys = 'qwertasdfgzxcv'
  let temp, state

  const result = str.split('').reduce((acc,cur)=> {
    const [nextX,nextY] = table[cur]
    temp = leftKeys.indexOf(cur) !== -1 ? [...left] : [...right]
    state = leftKeys.indexOf(cur) !== -1

    const [x,y] = temp
    state ? left = [nextX,nextY] : right = [nextX,nextY]
    return acc + Math.abs(nextX-x) + Math.abs(nextY-y)
  }, str.length)

  console.log(result)
}

solution(input)