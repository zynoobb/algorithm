function solution(elements) {
  let result = new Set()
  let arr = elements.concat(elements)  
  
  for(let i = 0 ; i < elements.length ; i ++){
    for(let j = 0 ; j < elements.length ; j++){
      result.add(arr.slice(j,i+j+1).reduce((acc,cur)=> acc+cur),0)
    }
  }
  return result.size
}