function solution(names) {
   return names.filter((el,idx)=> {
       if(idx%5===0) return el
   })
}