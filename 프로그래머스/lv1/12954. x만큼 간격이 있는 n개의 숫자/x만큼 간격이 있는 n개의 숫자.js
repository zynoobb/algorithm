function solution(x, n) {
   return new Array(n).fill(x).map((a,i)=>a*(i+1))
}