function solution(targets) {
  let sorted = targets.sort((a, b) => a[0] - b[0]);
  let range = sorted[0][1]
  let result = [range]
  
  for(let i = 1 ; i < sorted.length ; i++){
    let [start, end] = sorted[i]
    if(range <= start) {
      result.push(start)
      range = end
    } else {
      range = Math.min(range,end)
    }
  }
  return result.length
}