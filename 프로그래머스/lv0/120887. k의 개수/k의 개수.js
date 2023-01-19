function solution(i, j, k) {
    var answer = 0;
    let str = ''
    for(let a = i ; a<=j ; a++){
      str += a
    }
    for(b of str){
      if(b==k){
        answer++
      }
    }
  return answer
}