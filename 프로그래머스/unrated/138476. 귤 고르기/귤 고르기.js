function solution(k, tangerine) {
  let obj = {}
  
  tangerine.forEach((el)=> obj[el] = (obj[el] || 0) + 1)
  
  let sorted = Object.entries(obj).sort((a,b)=> b[1]-a[1])
    .map((el)=> el[1])
  
  if(sorted.length === 1) return 1
  if(sorted.length === k) return k
  
  let result = 0
  let i
  for(i = 0 ; i < sorted.length ; i ++) {
      if(result < k) result += sorted[i]
      else return i
  }
  return i
}