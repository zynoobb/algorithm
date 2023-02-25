function solution(s) {
  s = s.replaceAll("{","").replaceAll("}", "").split(',')
  let obj = {}
  
  for(let i = 0 ; i < s.length ; i++){
    obj[s[i]] = (obj[s[i]]||0)+1
  }
  
  return Object.entries(obj).sort((a,b)=> b[1] - a[1]).map((a)=> Number(a[0]))
}