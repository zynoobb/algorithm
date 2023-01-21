function solution(my_string, letter) {
let result = ''
    
    for(a of my_string){
      if(a != letter){
        result += a
      }
    }
  return result
}