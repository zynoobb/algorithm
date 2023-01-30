function solution(score) {
    let arr = []
  
    for(let i = 0 ; i < score.length ; i ++){
      arr.push(score[i][0]+score[i][1])
    }
    let result = new Array(arr.length).fill(1)
    
    for(let i = 0 ; i < arr.length ; i++ ){
      for(let j = 0 ; j < arr.length ; j ++){
        if(arr[i]<arr[j]){
          result[i]++
        }
      }  
    }
    return result
}