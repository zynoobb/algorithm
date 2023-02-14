function solution(numer1, denom1, numer2, denom2) {
  let mom = denom1 * denom2
  let son = numer1 * denom2 + numer2 * denom1
  
  let a = mom
  let b = son
  
  while (b !== 0){
    let temp = a%b
    a = b
    b = temp
  }
  return [son/a, mom/a]
}