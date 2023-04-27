function solution(number, limit, power) {
  let arr = new Array(number).fill(0)
  
  const checkPrime = (x) => {
    let sum = 0
    for(let i = 1 ; i <= Math.sqrt(x) ; i++) {
      if(x%i === 0) {
        if(x/i === i) sum ++
        else sum +=2
      }
      if(sum > limit) return power
    }
    return sum
  }
  
  arr.forEach((el, idx)=> {
    arr[idx] = checkPrime(idx+1)
  })

  return arr.reduce((acc,cur)=> acc+cur)
}