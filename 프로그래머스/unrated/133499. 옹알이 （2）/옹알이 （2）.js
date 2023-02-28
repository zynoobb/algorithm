function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"]
  const alp = "qwertyuiopasdfghjklzxcvbnm"
  
  let result = babbling.length
  
  for(let i = 0 ; i < babbling.length ; i++){
    for(let j = 0 ; j < arr.length ; j++){
      babbling[i] = babbling[i].replaceAll(arr[j], j)
    }
  }

  for(let i = 0 ; i < babbling.length ; i++){
    for(let j = 0 ; j < babbling[i].length ; j++){
      if(babbling[i][j] === babbling[i][j+1]) {
        result --
        break
      }
      
      if(alp.includes(babbling[i][j])){
        result --
        break
      }
    }
  }
  return result
}