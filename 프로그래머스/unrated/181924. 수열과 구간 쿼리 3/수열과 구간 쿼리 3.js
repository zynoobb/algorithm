function solution(arr, queries) {
  queries.forEach((el)=> {
    let [a,b] = el
    let temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
  })
  
  return arr
}