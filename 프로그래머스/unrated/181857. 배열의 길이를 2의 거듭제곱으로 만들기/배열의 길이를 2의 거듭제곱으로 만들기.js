function solution(arr) {
  let pow2arr = Array.from({length : 11}, (el, idx)=> {
   return el = Math.pow(2,idx) 
  })
  
  if(pow2arr.includes(arr.length)) return arr
  
  let diff
  for(let i = 0 ; i < pow2arr.length ; i++) {
    if(arr.length < pow2arr[i]) {
      diff = pow2arr[i] - arr.length
      break
    }
  }
  
  let temp = Array.from({length : diff}, ()=> 0)
  return arr.concat(temp)
}