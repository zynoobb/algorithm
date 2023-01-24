function solution(left, right) {
let arr = new Array(right-left+1).fill(left).map((a,i)=>a+i)
    let sum = 0 
    let yak = []
    for(let i = 0 ; i < arr.length ; i ++){
      let temp = []
      for(let j = 1 ; j <= arr[i] ; j++){
        if(arr[i]%j == 0){
          temp.push(j)
        }
      }
      yak.push(temp)
    }
  
    for(let i = 0 ; i < yak.length ; i ++){
      if(yak[i].length%2 == 0){
        sum += arr[i]
      } else {
        sum -= arr[i]
      }
    }
  return sum
}