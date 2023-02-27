function solution(A, B) {
  let result = 0
  B = B.sort((a,b)=>b-a)
  A = A.sort((a,b)=>b-a)
  let fixA = A.length
  let fixB = B.length
  
  for(let i = 0 ; i < fixA ; i ++){
    for(let j = 0 ;  j < fixB ; j++){
      if(A.at(-1) >= B.at(-1)){
        B.pop()
      }else{
        result ++
        A.pop()
        B.pop()
      }
      if(B.length === 0) return result
    }
  }
}