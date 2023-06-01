function solution(str_list) {
  if(str_list.indexOf("l")===-1 && str_list.indexOf("r")===-1) return []
  let result
  for(let i = 0 ; str_list.length ; i++){
    if(str_list[i] === "l" || str_list[i]==="r") {
      result = [str_list[i],i]
      break
    }
  }
  
  return result[0] === "l"
    ? str_list.slice(0, result[1])
    : result[0] === "r"
    ? str_list.slice(result[1]+1)
    : []
}