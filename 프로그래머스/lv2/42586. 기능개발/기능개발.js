function solution(progresses, speeds) {
  let tempSet = new Set()
  let temp = new Set()
  let temp2 = new Set()
  
  while (Math.min(...progresses) < 100){
    progresses = progresses.map((a,i)=> a += speeds[i])
    
    for(let i = 0 ; i < progresses.length ; i ++){
      if(progresses[i] >= 100) temp.add(i)    
    }
    let stack = [...temp].sort((a,b)=>a-b)

    for(let i = 0 ; i < stack.length ; i++){
      if(stack[i] == i && stack[i+1] !== i+1) {
        temp2.add(i+1)
         
      }
    }
  }

  let last = [...temp2]
  let result = []
  
  for(let i = 0 ; i < last.length ; i ++){
    if(i !== last.length-1) {
      result.unshift(last.at(-1-i)-last.at(-2-i))     
    }else {
    result.unshift(last[0])
    }
  }
    return result
}