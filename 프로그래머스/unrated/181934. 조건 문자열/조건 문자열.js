function solution(ineq, eq, n, m) {
  let result = eq !== "!" ? n+ineq+eq+m : n+ineq+m
  return eval(result) ? 1 : 0
}