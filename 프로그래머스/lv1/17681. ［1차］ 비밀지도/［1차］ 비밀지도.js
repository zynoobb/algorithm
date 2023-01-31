function solution(n, arr1, arr2) {
    let a1 = arr1.map((x)=>x.toString(2).padStart(n,"0"))
    let a2 = arr2.map((x)=>x.toString(2).padStart(n,"0"))
  
    let result = []
    
    for(let i = 0; i < a1.length ; i ++){
      
      let tempStr = ''
      for(let j = 0 ; j < a1[i].length ; j ++){
           if(a1[i][j] == 1 && a2[i][j] == 1 ){
             tempStr += '#' 
          }else if(a1[i][j] == 1 || a2[i][j] == 1){
            tempStr += '#'
          }else {
            tempStr += ' '
          }
      }
      result.push(tempStr)
    }
  
  return result
}