function solution(myString, pat) {
   let result = 0
   let patLeng = pat.length
   
   for(let i = 0 ; i < myString.length ; i ++){
       let temp = myString.slice(i,patLeng+i)
       if(temp === pat) result ++
   }
    return result
}