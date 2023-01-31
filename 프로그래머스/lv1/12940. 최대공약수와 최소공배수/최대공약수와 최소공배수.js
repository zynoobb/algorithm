function solution(n, m) {
  let a = n
  let b = m
  
  while (b !== 0){
    let temp = a%b
    a = b
    b = temp
  }

  return [a,(n*m)/a]
}

  //  for(let i = 0 ; i < 20 ; i++){
  //   if(a%b !== 0){
  //     let temp = a%b
  //     a = b 
  //     b = temp
  //   } else break
  // }
  // return [b, m*n/b]