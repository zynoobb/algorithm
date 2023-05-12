function solution(intStrs, k, s, l) {
  let result = intStrs.map(el=> Number(el.slice(s,s+l)))
    .filter(el => el > k)
    
  return result
}