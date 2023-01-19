function solution(my_string) {
    var answer = '';
    let arr = [...my_string]
    arr.map((a)=>{
      if(!answer.includes(a)){
        answer += a
      }
    })
    
    return answer;
}