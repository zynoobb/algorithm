function solution(my_string) {
  let result = 0  
  let temp = ''
    
    for(let i = 0; i < my_string.length ; i ++){
      if(!isNaN(my_string[i]) && !isNaN(my_string[i+1])){
        temp += my_string[i]
      }else if(!isNaN(my_string[i])){
        temp += Number(my_string[i])
        result += Number(temp)
        temp = 0
      }
    }
  return result
}