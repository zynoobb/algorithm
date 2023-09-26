const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim().split('\n')

const tableMaking = (table) => {
  const grades = ['D','C','B','A']
  const adds = ['-','0','+']
  table['F'] = 0

  grades.forEach((grade, i)=> {
    adds.forEach((add, j)=> {
      const key = String(grade + add)
      table[key] = (i + 1) +  0.3 * (j - 1)
    })
  })
}

function solution(data) {
  data.shift()
  
  const table = {}
  tableMaking(table)
  
  const [sumGrade, sumCredit] = data.reduce((acc,cur)=> {
    const [_, credit, grade] = cur.split(' ')
    const [accGrade, accCredit] = acc
    const score = credit * table[grade]
    return [accGrade + score, accCredit + + credit]
  },[0,0])

  const result = (Math.round(sumGrade / sumCredit * 100) / 100).toFixed(2)
  console.log(result)
}

solution(input) 