function solution(n, m, section) {
  let arr = new Array(n).fill(1)
  
  section.forEach((el,idx)=> arr[el-1] = 0)
  
  let result = 0
  
    arr.forEach((el,idx)=> {
      if(el === 0) {
        arr.fill(1, idx, idx + m)
        result ++
      }
    })
  
  return result
}