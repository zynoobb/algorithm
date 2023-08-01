const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(data) {
  let result = ["어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다."]
  const text = ['"재귀함수가 뭔가요?"', '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.', '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.', '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."']
  const last = ['"재귀함수가 뭔가요?"', '"재귀함수는 자기 자신을 호출하는 함수라네"']
  const recursive = (n) => {
    let underBar = "____".repeat(n)
    if(n !== Number(data)) {
      let temp = text.map((el)=> underBar + el)
      result = result.concat(temp)
      recursive(n + 1)
    } else {
      let lastTemp = last.map((el)=> underBar + el)
      result = result.concat(lastTemp)
    }
    result.push(`${underBar}라고 답변하였지.`)
  }

  recursive(0)

  console.log(result.join('\n'))
}
solution(input)
