const fs = require('fs')
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin":"입력.txt")
  .toString().trim()

function solution(data) {
  let primes = [2,3]

  const makingPrimes = () => {
    for(let i = 2 ; i <= 105 ; i++) {
      const sqrt = Math.floor(Math.sqrt(i))
      for(let j = 2 ; j <= sqrt ; j++) {
        if(i%j === 0) break
        if(j === sqrt) primes.push(i)
      }
    }
  }
  makingPrimes()
  
  const list = primes.map((el, idx)=> {
    if(idx !== primes.length - 1) return el = el*primes[idx+1]
  })
  
  let result
  
  for(let i = 0 ; i < list.length ; i ++) {
    if(data < list[i]) {
      result = list[i]
      break
    }
  }

  console.log(result)
}

solution(input)
 