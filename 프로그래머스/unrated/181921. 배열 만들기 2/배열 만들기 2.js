function solution(l, r) {
  let arr = []
  
  let i = 1
  while (true) {
    let temp = i.toString(2)
    let trans = Number(temp.replaceAll("1","5"))
    
    if(trans > r) break
    if(trans >= l)arr.push(trans)
    i++
  }
  
  return arr.length === 0 ? [-1] : arr
}