function solution(a, b, c, d) {
  let obj = {}
  let arr = [a,b,c,d]
  arr.forEach((el)=> {
    obj[el] = (obj[el] || 0) +1
  })
  
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  let sorted = Object.entries(obj).sort((a,b)=> b[1] - a[1])
  let p = Number(sorted[0][0])
  
  if(keys.length === 1) return 1111 * p
  else if(keys.length === 2 && values[0] !== values[1]) {
    let q = Number(sorted[1][0])
    return Math.pow((10 * p + q),2)
  } else if(keys.length === 2) {
    let q = Number(sorted[1][0])
    return (p + q) * Math.abs(p - q)
  } else if(keys.length === 3) {
    let q = Number(sorted[1][0])
    let r = Number(sorted[2][0])
    return q * r
  } else {
    let valuesSorted = Object.entries(obj).sort((a,b)=> a[0] - b[0])
    return Number(valuesSorted[0][0])
  }
}