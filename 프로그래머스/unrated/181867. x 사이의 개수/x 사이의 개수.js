function solution(myString) {
  myString = [...myString]
  
  let result = []
  let temp = 0
  myString.forEach((el,idx)=> {
    if(el === "x") {
      result.push(temp)
      temp = 0
    } else if(el !== "x") {
      temp ++
    } 
    
    if(idx === myString.length -1) {
      result.push(temp)
    }
  })
  
  return result
}