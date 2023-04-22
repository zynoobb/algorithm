function solution(clothes) {
  let obj = {}
    clothes.forEach((el)=>{
      obj[el[1]] = (obj[el[1]]||0) + 1
    })
  
  let result = 1
  for(let value in obj) result *= obj[value]+1
  return result -1
}