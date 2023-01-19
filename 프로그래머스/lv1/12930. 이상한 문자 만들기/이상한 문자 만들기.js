function solution(s) {
    result = '' 
  let arr = s.split(" ")
  
  for(let i = 0 ; i < arr.length ; i ++ ){
    for(let j = 0 ; j < arr[i].length ; j ++){
      if(j%2 == 0){
        result += arr[i][j].toUpperCase()
      } else {
        result += arr[i][j].toLowerCase()
      }
    }
    result += " "
  }
  return result.slice(0,result.length-1)}