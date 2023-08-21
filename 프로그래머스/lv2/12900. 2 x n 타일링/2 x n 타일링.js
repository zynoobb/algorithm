function solution(n) {
  const table = {
    "1" : 1,
    "2" : 2
  }

  for(let i = 3 ; i <= n ; i ++) {
    table[i] = (table[i-2] + table[i-1]) % 1000000007
  }
  
  return table[n]
}