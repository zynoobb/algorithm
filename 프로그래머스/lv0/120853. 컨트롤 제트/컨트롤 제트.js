function solution(s) {
  let arr = s.split(" ")
  let result = []
  
  for(let i = 0 ; i < arr.length ; i ++ ){
    if(arr[i] !== "Z" && arr[i+1] !== "Z"){
      result.push(arr[i])
    }
  }
  return result.reduce((a,c)=>Number(a)+Number(c),0)
}