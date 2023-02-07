function solution(s){
  let input = []
    if (s.length % 2 == 1 || s[0] === ")" ) return false
     
    for(let i = 0 ; i < s.length ; i ++){
      input.push(s[i])
      if(input[input.length-2] === "(" 
         && input[input.length-1] === ")"){
        input.pop()
        input.pop()
      }
    }
  return input.length == 0
}