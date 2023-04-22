function solution(a, b, n) {
let result = 0
  
  while(a <= n){
    let receive = Math.floor(n/a)*b
    result += receive
    n = receive + n%a
  }
  return result
}