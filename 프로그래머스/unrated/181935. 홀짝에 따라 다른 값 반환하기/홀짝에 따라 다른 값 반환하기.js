function solution(n) {
  let result = 0
  const callback = (x) => {
    if(x === 1) {
      let result = new Array((n+1)/2)
        .fill(1)
        .map((el,idx)=> el + idx*2)
        .reduce((acc,cur)=> acc+cur)
      return result
    } else {
      let result = new Array(n/2)
        .fill(2)
        .map((el,idx)=> el + idx*2)
        .reduce((acc,cur)=> acc + Math.pow(cur,2),0)
      return result
    }
  }
  
  return callback(n%2)
}