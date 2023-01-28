function solution(sides) {
    let [a,b] = sides
    let result = 0
    
    for(let i = 0 ; i < a+b ; i++){
      if(Math.abs(a-b) < i ){
        result ++
      }
    }
    return result
}