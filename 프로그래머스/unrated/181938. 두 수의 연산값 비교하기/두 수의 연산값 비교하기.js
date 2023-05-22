function solution(a, b) {
  const plusAct = (x,y) => Number(String(x) + String(y))
  
  let plus = plusAct(a,b)
  let multi = 2 * a * b
  
  return plus > multi 
    ? plus
    : multi
}