function solution(sizes) {
  let big = []
  let sma = []  
  for(let i = 0 ; i < sizes.length ; i ++){
    let [w,h] = sizes[i]
    if(w > h){
      big.push(w)
      sma.push(h)
    }else {
      big.push(h)
      sma.push(w)
    }
  }
  return Math.max(...big)*Math.max(...sma)
}