const fs = require('fs')
// const input = fs.readFileSync('입력/temp.txt').toString().trim().split("\n")
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

input.shift()

function solution(data) {
  const cases = data[0].split(" ").map((el)=> +el)

  let prime = Array.from({length : Math.max(...cases) + 1}, ()=> true)
  prime[0] = false, prime[1] = false

  const makingPrime = () => {
    for(let i = 0 ; i < prime.length ; i ++) {
      if(!prime[i]) continue
      for(let j = 2 ; j <= Math.sqrt(i) ; j ++) {
        if(i%j == 0) {
          prime = prime.map((el, idx)=> {
            return idx % i === 0 ? false : el
          })
        }
      }
    }
  }
  makingPrime()

  const result = cases.map((el)=> prime[el]).filter((x)=> x).length
  console.log(result)
}
solution(input)
