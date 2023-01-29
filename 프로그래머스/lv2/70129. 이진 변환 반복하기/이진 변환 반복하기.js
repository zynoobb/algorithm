function solution(s) {
  let zeroSum = 0
  let i = 0
  
  while (s.length != 1){
    for(a of s){
      if(a == 0){
        zeroSum++
      }
    }
    
    let temp = s.split("0").join("")
    s = (temp.length).toString(2)
    i++
  }
  
  return [i,zeroSum]
}