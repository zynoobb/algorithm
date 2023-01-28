function solution(s) {
  let arr = s.split(" ")
  let result = []
  
  for(let i = 0 ; i < arr.length ; i ++ ){
    if(arr[i] !== "Z" && arr[i+1] !== "Z"){
      result.push(Number(arr[i]))
    }
  }
  return result.reduce((a,c)=>a+c,0)
}