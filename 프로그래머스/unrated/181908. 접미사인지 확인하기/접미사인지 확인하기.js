function solution(my_string, is_suffix) {
  let last = my_string.slice(my_string.length - is_suffix.length)
  
  return last === is_suffix ? 1 : 0
}