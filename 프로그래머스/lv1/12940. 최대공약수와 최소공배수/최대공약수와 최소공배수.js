function solution(n, m) {
  let a = n
  let b = m
  
  while (b !== 0){
    let temp = a%b
    a = b
    b = temp
  }

  return [a,(n*m)/a]
}