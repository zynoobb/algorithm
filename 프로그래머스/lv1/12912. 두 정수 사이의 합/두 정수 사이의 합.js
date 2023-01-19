function solution(a, b) {
 let arr = new Array(Math.abs(b-a)+1)
  .fill(a<b?a:b).map((x,i)=>x+i)
  
  return arr.reduce((q,w)=>{
    return q+w
  })
}
