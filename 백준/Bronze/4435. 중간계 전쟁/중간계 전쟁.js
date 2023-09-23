const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const act = (arr,i) => {
  const splits = arr.map(el=> el.split(' ').map(Number))
  const scores = [[1,2,3,3,4,10], [1,2,2,2,3,5,10]]
  const [team1, team2] = splits.map((el,idx)=> scores[idx].reduce((acc,cur,j)=> {
    return acc + (cur * el[j])
  },0))

  return team1 > team2 ?
    `Battle ${i + 1}: Good triumphs over Evil` :
    team2 > team1 ? 
    `Battle ${i + 1}: Evil eradicates all trace of Good` :
    `Battle ${i + 1}: No victor on this battle field`
}

function solution(data) {
  data.shift()
  const testCase = []
  data.forEach((el,idx)=> {
    if(idx % 2 === 0) testCase.push(data.slice(idx, idx+2))
  })
  
  const result = testCase.map((el,i)=> act(el,i))
  console.log(result.join('\n'))
}

solution(input)
