function solution(keymap, targets) {
  let result = []
  
  for(let i = 0 ; i < targets.length ; i++){
    let count = []
    for(let j = 0 ; j < targets[i].length ; j ++){
      km = keymap.map((a)=> a.indexOf(targets[i][j])+1)
        .filter(a => a!==0)
      
      if(km.length === 0) {
        count.push(-1)
        break
      } else {
      count.push(Math.min(...km))   
      }
    }
    
    count.includes(-1) 
      ? result.push(-1) 
      : result.push(count.reduce((a,c)=> a+c))
  }
  return result
}