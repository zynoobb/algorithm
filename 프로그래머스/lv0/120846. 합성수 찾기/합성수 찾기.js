function solution(n) {
let arr = []
  for(let i = 0 ; i <=n ; i++){
    let temp = []
    for(let j = 1 ; j <= i ; j++){
      if(i%j == 0){
        temp.push(j)
      }
    }
    arr.push(temp)
  }
  
  let sum = 0
  for(a of arr){
    if(a.length > 2){
      sum ++
    }
  }
  return sum    
}