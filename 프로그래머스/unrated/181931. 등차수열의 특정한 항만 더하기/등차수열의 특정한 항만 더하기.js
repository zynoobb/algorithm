function solution(a, d, included) {
  let arr = []
  included.reduce((acc,cur, idx)=> {
    arr.push(a+idx*d)
  },0)
  
  let result = 0
  included.forEach((el,idx)=> {
    if(el === true) result += arr[idx]
  })
  
  return result
}