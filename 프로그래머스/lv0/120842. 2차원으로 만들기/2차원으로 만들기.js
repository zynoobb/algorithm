function solution(num_list, n) {
let bigArr = []
    
    for(let i = 0 ; i<num_list.length/n ; i++ ){
      let smaArr = []
      for(let j = 0 ; j<n ; j++){
        smaArr.push(num_list[j+i*n])

      }
      bigArr.push(smaArr)
    }
  return bigArr
}