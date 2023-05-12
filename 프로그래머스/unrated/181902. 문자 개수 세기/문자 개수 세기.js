function solution(my_string) {
  let obj = {}
  
  for(let i = 0 ; i < my_string.length ; i++) {
    let char = my_string.charCodeAt(i)
    char < 91 ? char -= 65 : char -= 71
    obj[char] = (obj[char] || 0) + 1
  }
  
  let result = new Array(52).fill(0)
  
  for(let key in obj) result[key] = obj[key]

  return result
}