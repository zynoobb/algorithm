function solution(n) {
  let result = []
  for(let i = 0 ; i < n ; i ++) {
    let arr = new Array(n).fill(0)
    arr[i] = 1
    result.push(arr)
  }
  
  return result
}