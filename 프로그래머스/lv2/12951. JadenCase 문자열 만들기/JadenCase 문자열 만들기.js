function solution(s) {
let arr = [...s.toLowerCase()]
  let result = ''
  
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i-1] == " " || arr[i-1] == undefined){
      result += arr[i].toUpperCase()
    } else {
      result += arr[i]
    }
  }
  return result
}