function solution(my_string) {
           var answer = [];
    let numbers = ["1","2","3","4",'5','6','7','8','9','0']
    for(a of my_string){
      if(numbers.includes(a)){
         answer.push(Number(a))
         }
    }
    
    return answer.sort((a,b)=> a-b);
}