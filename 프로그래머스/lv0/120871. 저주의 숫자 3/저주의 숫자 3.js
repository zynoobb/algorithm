function solution(n) {
  let arr = new Array(200).fill(1).map((a,i)=>a = i+1)
  
  let result = arr.filter((a)=>{
    return a%3 !== 0 && !a.toString().includes("3")
  })
  
  return result[n-1]
}