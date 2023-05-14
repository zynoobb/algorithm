function solution(str_list, ex) {
  let result = str_list.filter((el)=> !el.includes(ex))
  return result.join("")
}