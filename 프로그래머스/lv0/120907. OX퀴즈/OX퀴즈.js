function solution(quiz) {
  let result = []  
  for(let a of quiz){
   eval(a.split("=")[0]) == eval(a.split("=")[1]) ? result.push("O") : result.push("X")
  }
  return result
}