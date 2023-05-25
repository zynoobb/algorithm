function solution(arr) {
  let result = []
    
  arr.forEach((el)=> {
     let temp = new Array(el).fill(el)
     result = result.concat(temp)
  })
  
  return result
}