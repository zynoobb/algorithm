function solution(a, b) {
  let firstCase = String(a) + String(b)
  let secondCase = String(b) + String(a)
  
  return firstCase >= secondCase ? Number(firstCase) : Number(secondCase)
}