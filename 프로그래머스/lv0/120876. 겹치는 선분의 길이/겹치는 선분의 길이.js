function solution(lines) {
 let arr = []
  
  for(let i = 0 ; i < lines.length ;i ++) {
    let [start, end] = lines[i]
    let temp = []
    for(let j = start ; j <= end ; j ++) {
      if(j !== end)temp.push(String(j)+String(j+1))
    }
    arr.push(temp)
  }
  
 let obj = {}
  for(let i = 0 ; i < arr.length ; i ++){
    for(let j = 0 ; j < arr[i].length ; j++){
      obj[arr[i][j]] = (obj[arr[i][j]] || 0) + 1
    }
  }
  
  let result = 0
  for(let i = 0 ; i < Object.values(obj).length ; i++){
    if(Object.values(obj)[i] !== 1) result ++
  }
  return result
}