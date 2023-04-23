function solution(X, Y) {
  let arr = []
  let obj = {}
  X = [...X]
  Y = [...Y]
  
  Y.forEach((el)=> obj[el] = (obj[el]||0)+1)
  
  X.forEach((el)=> {
    if(Y.includes(el) && obj[el] !== 0) {
      arr.push(el)
      obj[el] --
    }
})
  
  let result = arr.sort((a,b)=> b-a).join("")
  if(result.length === 0) return "-1"
  else if(Number(result) === 0) return "0"
  else return result
}