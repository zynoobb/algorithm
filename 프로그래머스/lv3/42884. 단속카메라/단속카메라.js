function solution(routes) {
  let sorted = routes.sort((a,b)=> a[0]-b[0])
  let range = sorted[0][1]
  let result = [range]
  
  for(let i = 1 ; i < sorted.length ; i++){
    let [start, end] = sorted[i]
    
    if(range < start) {
      result.push(end)
      range = end
    } else {
      range = Math.min(end,range)
    } 
  }
  return result.length
}