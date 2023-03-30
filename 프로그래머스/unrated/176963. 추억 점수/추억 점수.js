function solution(name, yearning, photo) {
  let obj = {}
  name.forEach((el,idx)=> obj[el] = yearning[idx])
    
  let result = []
  for(let i = 0 ; i < photo.length ; i ++){
    let sum = 0
    for(let j = 0 ; j < photo[i].length ; j ++){
      if(obj[photo[i][j]]) sum += obj[photo[i][j]]
    }
    result.push(sum)
  }
  
  return result
}