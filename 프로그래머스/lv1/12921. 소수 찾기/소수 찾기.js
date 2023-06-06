function solution(n) {
  const arr = Array.from({length : n + 1}, ()=> true)
  arr[0] = false, arr[1] = false
  
  for(let i = 2 ; i <= n ; i++) {
    if(!arr[i]) continue
    else for(let j = i*2 ; j <= n ; j += i) {
      arr[j] = false
    }
  } 
  
  return arr.filter((el)=> el === true).length
}