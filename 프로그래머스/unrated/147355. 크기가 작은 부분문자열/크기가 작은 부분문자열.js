function solution(t, p) {
  let result = 0
  for(let i = 0 ; i < t.length-p.length+1; i++){
    
    let temp = function() {
      let tempSum = ""
      for(let j = 0 ; j < p.length ; j++){
        tempSum += t[j+i]
      }
      return tempSum
    }

    if(p >= temp()){
      result ++
    }
  }
  return result
}