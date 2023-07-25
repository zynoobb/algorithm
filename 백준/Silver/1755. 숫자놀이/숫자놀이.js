
const fs = require('fs')
// const input = fs.readFileSync('입력/1755.txt').toString().trim()
const input = fs.readFileSync('/dev/stdin').toString().trim()

const obj = {
  1 : "one",
  2 : "two",
  3 : "three",
  4 : "for",
  5 : "five",
  6 : "six",
  7 : "seven",
  8 : "eight",
  9 : "nine",
  0 : "zero"
}

const transform = (int) => {
  let str = ""
  let arr = [...String(int)]
  arr.forEach((el)=> {
    str += obj[el]
  })
  return str
}

function solution(data) {
  let [a,b] = data.split(" ")
  let arr = Array.from(({length : b - a + 1}))
    .map((el, idx)=> el = idx + Number(a))
  

  let result = arr.map((el)=> [el, transform(el)])
    .sort((a,b)=> a[1].localeCompare(b[1]))
    .map((el)=> el[0])

  let temp = []
  for(let i = 0 ; i < result.length ; i++) {
    temp.push(result[i])
    if(temp.length === 10) {
      console.log(temp.join(" "))
      temp = []
    }
    if(i === result.length -1) console.log(temp.join(" "))
  }
}

solution(input)