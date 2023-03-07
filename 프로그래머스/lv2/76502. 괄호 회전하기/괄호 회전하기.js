function solution(s) {
  const str = "[](){}"
  const w = (x) => s.indexOf(x) === 0 ? 0.5 : s.indexOf(x)
  
  let big = 0
  let small = 0
  let mid = 0
  
  for(let i = 0 ; i < s.length ; i++){
    if(s[i] === str[0]) {
      big ++
    }else if(s[i] === str[1]){
      big --
    }else if(s[i] === str[2]){
      small ++
    }else if(s[i] === str[3]){
      small --
    }else if(s[i] === str[4]){
      mid ++
    }else if(s[i] === str[5]){
      mid --
    }
  }
  if(big !== 0 || small !== 0 || mid !== 0) return 0
  
  let result = 0 
  
  for(let i = 0 ; i < s.length ; i ++){
    if(
      w(str[0]) < w(str[1]) 
      && w(str[2]) < w(str[3]) 
      && w(str[4]) < w(str[5])
    ) result ++  
    s = s.slice(1) + s[0]
  }
  
  return result
}