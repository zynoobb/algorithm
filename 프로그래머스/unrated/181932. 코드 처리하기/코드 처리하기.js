function solution(code) {
  let mode = false
  let result = []
  for(let i = 0 ; i < code.length ; i ++){
    if(code[i] === "1") mode = !mode
    else if(!mode && i%2===0) result.push(code[i])
    else if(mode && i%2===1) result.push(code[i])
  } 
  return result.length !== 0 
    ? result.join("")
    : "EMPTY"
}