function solution(s){
  let input = []
  
  for(let i = 0 ; i < s.length; i ++){
    input.push(s[i])
    if(input[input.length -2] === input[input.length -1]){
      input.pop()
      input.pop()
    } 
  }
  
  return input.length === 0 ? 1 : 0
}