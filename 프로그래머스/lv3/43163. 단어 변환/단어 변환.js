function solution(begin, target, words) {
    const compare = (a,b) => {
    a = [...a]
    b = [...b]
    let same = 0
    a.forEach((el,idx)=> {
      if(el === b[idx]) same ++
    })
    return same === a.length -1 ? true : false
  }
    
  if(!words.includes(target)) return 0
  
  let result = 0
  for(let i = 0 ; i < words.length ; i ++){
    if(compare(begin, target)) {
      return result + 1
    } else if(compare(begin, words[i])) {
      begin = words[i]
    } else {
      result --
    }
    result ++
  }
  return 0
}