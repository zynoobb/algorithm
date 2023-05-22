function solution(my_strings, parts) {
  let result = ""
    
  my_strings.forEach((el, idx)=> {
    let [a,b] = parts[idx]
    result += el.slice(a,b+1)
  })
  
  return result
}