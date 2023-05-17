function solution(strArr) {
  let obj = {}
  
  strArr.forEach((el)=> {
      let leng = el.length
      obj[leng] = (obj[leng]||0) + 1
  })
    
  let sorted = Object.entries(obj).sort((a,b)=> b[1]-a[1])
  return sorted[0][1]
}