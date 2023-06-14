function solution(arr) {
  let result = []
    
  let i = 0
  while(i < arr.length) {
    if(result.length === 0) {
      result.push(arr[i])
      i++
    } else if(result.length !==0 && result.at(-1) < arr[i]) {
      result.push(arr[i])
      i++
    } else if(result.length !==0 && result.at(-1) >= arr[i]) {
      result.pop()
    }
  }
  return result
}