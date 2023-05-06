function solution(my_string, overwrite_string, s) {
  my_string = [...my_string]
  for(let i = s ; i < overwrite_string.length+s ; i ++)
    my_string[i] = overwrite_string[i-s]
  
  return my_string.join("")
}