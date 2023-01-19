function solution(n) {
    answer = 0
    str = String(n)
    for(let a of str){
      if(a%3 ==0 && a!=0){
        answer++
      }
    }
    return answer
}