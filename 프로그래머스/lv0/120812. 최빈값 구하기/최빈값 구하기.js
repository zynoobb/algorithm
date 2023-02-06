function solution(array) {
    if(array.length === 2 && array[0] === array[1]) return array[0]
    if(array.length === 2) return -1
  
    let obj = {}
    
    for(let i = 0 ; i < array.length ; i ++){
      obj[array[i]] = (obj[array[i]]||0) + 1
    }

    if(Object.values(obj).length === 1) return Number(Object.keys(obj)[0])
  
    let sorted = Object.entries(obj).sort((a,b)=>b[1]-a[1])
    
    return sorted[0][1] === sorted[1][1] ? -1 : Number(sorted[0][0])


}