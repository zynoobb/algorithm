function solution(n, works) {
  let sorted = works.sort((a,b)=> b-a)
  if(sorted.reduce((acc,cur)=> acc + cur) < n) return 0
  
  let time = 0
  while (time < n) {
    for(let i = 0 ; i < sorted.length ; i ++) {
      sorted[i]--
      time++
      if(sorted[i] >= sorted[i+1] || time === n) break
    }
  }
  return sorted.reduce((acc,cur)=> acc + Math.pow(cur,2),0)
}