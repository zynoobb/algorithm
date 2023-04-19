function solution(n, t, m, p) {
  let result = ""
  const transfer = (x) => {
    return x.toString(n).toUpperCase()
  }

  let temp = new Array(t*m).fill(0)
  let arr = temp.map((el,idx)=> el = transfer(idx)).join("").split("")
  
  arr.forEach((el,idx)=> {
    if(idx%m === p-1) result+= el
  })
  return result.slice(0,t)
}