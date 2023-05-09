function solution(n, control) {
  let result = n
  const act = (x) => {
    if(x === "w") result ++
    else if(x==="s") result--
    else if(x==="d") result+=10
    else if(x==="a") result-=10
  }
  
  control = [...control]
  control.forEach((el)=> act(el))
  
  return result
}