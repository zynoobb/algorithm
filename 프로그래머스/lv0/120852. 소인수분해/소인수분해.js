function solution(n) {
  let result = new Set()
  let div = 2
  
    while (n>=2){
      if(n%div===0){
        n = n/div
        result.add(div)
      }else div++
    }
  return [...result]
}