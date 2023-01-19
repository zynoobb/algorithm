function solution(s){
    let str = s.toLowerCase()
    let pn = 0
    let yn = 0
    
    for(let a of str){
      if(a == "p"){
        pn ++
      } else if(a == "y"){
        yn ++
      }
    }
    return pn == yn
}