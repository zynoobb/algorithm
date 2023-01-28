function solution(array, n) {
  array = array.sort((a,b)=>a-b)
  let dif = n
  let result = 0
  for(let i = 0 ; i < array.length ; i ++){
    if(dif > Math.abs(n-array[i])){
      dif = Math.abs(n-array[i])
      result = array[i]
    }
  }
      return result
}