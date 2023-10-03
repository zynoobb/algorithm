const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const sameScoreAct = (table) => {
  for(let i = 9 ; i >= 0 ; i --) {
    if(table[i] !== 'D') return table[i]
  }
  return 'D'
}

function solution(data) {
  const [aCards, bCards] = data.map(el => el.split(' ').map(Number))
  const scoreTable = Array.from({length : 10}, ()=> false)
  let [aScore, bScore] = [0,0]

  aCards.forEach((a,i)=> {
    if(a === bCards[i]) {
      aScore ++
      bScore ++
      scoreTable[i] = 'D'
    } else {
      a > bCards[i] ? aScore += 3 : bScore += 3
      a > bCards[i] ? scoreTable[i] = 'A' : scoreTable[i] = 'B'
    }
  })

  const winner = aScore > bScore ? 'A' 
    : aScore < bScore ? 'B' 
    : sameScoreAct(scoreTable)

  console.log(`${aScore} ${bScore}`)
  console.log(winner)
}

solution(input)  
