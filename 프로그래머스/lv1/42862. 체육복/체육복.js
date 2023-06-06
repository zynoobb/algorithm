function solution(n, lost, reserve) {
  let arr = Array.from({length : n}).map((el,idx)=> {
    if(lost.includes(idx+1) && reserve.includes(idx+1)) {
      return el = 1
    } else if(lost.includes(idx+1)) {
      return el = 0
    } else if(reserve.includes(idx+1)){
      return el = 2
    } else {
      return el = 1
    }
  })
  
  for(let i = 0 ; i < n ; i++){
    if(arr[i] === 0 || arr[i] === 1) continue
    
    if(arr[i] === 2 && arr[i-1] === 0) {
      arr[i] --
      arr[i-1] ++
    } else if(arr[i] === 2 && arr[i+1] === 0) {
      arr[i] --
      arr[i+1] ++
    }
  }
  return arr.filter((el)=> el !== 0).length
}