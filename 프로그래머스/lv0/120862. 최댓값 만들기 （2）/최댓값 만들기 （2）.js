function solution(numbers) {
    var answer = -9999909999999999990;
  
    for(let i = 0 ; i<numbers.length ; i++){
      
      for(let j = i+1 ; j<numbers.length ; j++){
        if(numbers[j]*numbers[i] >= answer){
          answer = numbers[j]*numbers[i]
        }
      }
    }
  return answer
}