const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

function solution(data) {
  const [aCards, bCards] = data.map(el => el.split(' ').map(Number))
  
  const [aScore,bScore] = aCards.reduce((acc,cur,idx)=> {
    let [a,b] = acc
    cur > bCards[idx] ? a ++ : bCards[idx] > cur && b ++
    return [a,b]
  },[0,0])

  console.log(
    aScore > bScore ? 'A'
  : bScore > aScore ? 'B'
  : "D"
  )
}

solution(input)  
