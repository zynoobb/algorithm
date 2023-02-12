function solution(s) {
  let arr = []
  let result = []
  for(let i = 0 ; i < s.length ; i ++){
    if(!arr.includes(s[i])){
      arr.push(s[i])
      result.push(-1)
    }else{
      result.push(arr.length-arr.lastIndexOf(s[i]))
      arr.push(s[i])
    }
  }
  return result
}