function solution(s) {
  let obj = {}
  let result = ''
  s = [...s].sort()
  
  for(let i = 0 ; i < s.length ; i ++){
    obj[s[i]] = (obj[s[i]]||0) +1
  }
  
  for(let i = 0 ; i < Object.keys(obj).length ; i++){
    if(Object.values(obj)[i] === 1){
      result += Object.keys(obj)[i]
    }
  }
  return result
}