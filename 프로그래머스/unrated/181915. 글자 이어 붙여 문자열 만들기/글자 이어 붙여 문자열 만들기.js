function solution(my_string, index_list) {
  let obj = {}
  let arr = [...my_string]
  arr.forEach((el,idx)=> obj[idx] = el)
  
  let result = ""
  index_list.forEach((el)=> result+=obj[el])
  
  return result
}