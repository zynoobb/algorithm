function solution(arr, intervals) {
  let result = []
  
  intervals.forEach(el=> {
    const [a,b] = el
    const temp = arr.slice(a,b+1) 
    result = result.concat(temp)
  })
  
  return result
}