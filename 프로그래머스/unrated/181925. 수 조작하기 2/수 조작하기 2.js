function solution(numLog) {
    let obj = {
      "1" : "w",
      "-1" : "s",
      "10" : "d",
      "-10" : "a"
    }
    
    let result = ""
    numLog.forEach((el,idx)=> {
      let diff = numLog[idx+1] - el
      if(diff) result += obj[diff]
    })
  
  return result
}