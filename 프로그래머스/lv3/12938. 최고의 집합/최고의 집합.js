function solution(n, s) {
  let arr = new Array(n).fill(Math.floor(s/n))
  
  if(n > s) return [-1]
  if(s%n === 0) return arr
  
  let dif = s - arr.reduce((a,c)=> a+c)
  
  for(let i = 0 ; i < dif ; i++)
    arr[i] ++
    
  return arr.reverse()
}