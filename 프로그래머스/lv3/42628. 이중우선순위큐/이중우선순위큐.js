function solution(operations) {
  let result = []
  for(let i = 0 ; i < operations.length ; i++){
    
    let [cmd, num] = operations[i].split(" ")
    if(cmd === "I") {
      result.push(Number(num))
    }else if(cmd === "D" && num === "1") {
      result.shift()      
    }else if(cmd === "D" && num === "-1"){
      result.pop()
    }
    result = result.sort((a,b)=>b-a)
  }
  return result.length != 0 
    ? [result[0],result.at(-1)] : [0,0] 
}