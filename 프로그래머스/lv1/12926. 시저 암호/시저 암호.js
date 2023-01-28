function solution(s, n) {
    let al = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
   let AL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  
  for(let i = 0 ; i < s.length ; i++){
    if(s[i] === " "){
      result += " "
    }else if(s[i].toUpperCase() === s[i]){
      result += AL[AL.indexOf(s[i])+n]
    }else {
      result += al[al.indexOf(s[i])+n]
    }
  }
  return result
}